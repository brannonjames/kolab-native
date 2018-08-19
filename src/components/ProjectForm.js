import React, { Component } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text } from 'react-native';

import Input from './Input';
import Button from './Button';
import TechList from './TechList';
import TextArea from './TextArea';
import Loader from './Loader';

const COLORS = ['#80CED7', '#DC493A', '#84DCC6', '#ACD7EC', '#8B95C9'];

class ProjectForm extends Component {

  state = {
    avoidKeyboard: false,
    newTechnology: {
      name: ''
    },
    project: {
      title: '',
      technologies: [],
      description: ''
    }
  }

  componentDidMount() {
    if (this.props.initialState) {
      this.setState({
        ...this.state,
        project: this.props.initialState
      });
    }
  }

  handleTechAdd = () => {
    const { project, newTechnology } = this.state;
    if (newTechnology.name.length > 0) {
      const { technologies } = this.state.project;

      newTechnology.color = this.pickRandomColor();
  
      this.setState({ 
        project: { 
          ...project, technologies: [...technologies, newTechnology] 
        },
        newTechnology: { name: '' }
      });
    }
  }

  handleTechPress = tech => {
    const { project } = this.state;
    let technologies = project.technologies.filter(technology => (
      technology.name !== tech
    ));
    this.setState({ project: {...project, technologies } });
  }

  pickRandomColor() {
    const rand = Math.floor(Math.random() * COLORS.length);
    return COLORS[rand];
  }

  handleTechInputChange = text => {
    this.setState({ newTechnology: { name: text } });
  }

  handleChange = name => text => {
    this.setState({ project: { ...this.state.project, [name]: text } });
  }


  render() {
    const { newTechnology, project, avoidKeyboard } = this.state;
    const { handleSubmit, isLoading, initialState, handleDelete, handleUpdate } = this.props;
    const {
      techFormStyle,
      techFromButtonStyle
    } = styles;
    return ( 
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="position" 
        enabled={avoidKeyboard}
      >
        <Input 
          placeholder="Title"
          onChangeText={this.handleChange('title')}
          value={project.title}
        />

        <View style={techFormStyle}>
          <Input 
            placeholder="Technologies"
            onChangeText={this.handleTechInputChange}
            value={newTechnology.name}
            containerStyle={{ flex: 1 }}
          />
          <Button 
            title="Add"
            onPress={this.handleTechAdd}
            style={techFromButtonStyle}
          />
        </View>

        <TechList 
          editMode
          data={project.technologies}
          handlePress={this.handleTechPress}
        />
        
        
        <TextArea 
          placeholder="Description"
          value={project.description}
          onChange={this.handleChange('description')}
          returnKeyType="done"
          onFocus={() => this.setState({ avoidKeyboard: true })}
          onBlur={() => this.setState({ avoidKeyboard: false })}
        />
        

        <Button 
          onPress={() => initialState ? handleUpdate(project) : handleSubmit(project)}
          style={{ margin: 20 }}
        >
          {
            isLoading ? <Loader /> :
            <Text>{initialState ? 'Update' : 'Submit'}</Text>
          }
        </Button>

        { initialState &&
          <Button 
            onPress={() => handleDelete(project)}
            style={{ margin: 50, marginTop: 20, backgroundColor: '#ff8a82' }}
          >
            {
              isLoading ? <Loader /> :
              <Text>Delete</Text>
            }
          </Button>
        }


      </KeyboardAvoidingView>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  techFormStyle: {
    flexDirection: 'row'
  },
  techFromButtonStyle: {
    marginRight: 20,
    padding: 8,
    alignSelf: 'center'
  }
})

export default ProjectForm;
