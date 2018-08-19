import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, View, StyleSheet, Text } from 'react-native';

import Input from './Input';
import Button from './Button';
import TechList from './TechList';
import TextArea from './TextArea';
import Loader from './Loader';

const COLORS = ['#80CED7', '#DC493A', '#84DCC6', '#ACD7EC', '#8B95C9'];

class ProjectForm extends Component {

  state = {
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
    if (this.props.editMode) {
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
      console.log(newTechnology);
  
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
    const {
      techFormStyle,
      techFromButtonStyle
    } = styles;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView 
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="always"
        >

          <Input 
            placeholder="Title"
            onChangeText={this.handleChange('title')}
            value={this.state.title}
          />

          <View style={techFormStyle}>
            <Input 
              placeholder="Technologies"
              onChangeText={this.handleTechInputChange}
              value={this.state.newTechnology.name}
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
              data={this.state.project.technologies}
              handlePress={this.handleTechPress}
            />

            <TextArea 
              placeholder="Description"
              value={this.state.project.description}
              onChange={this.handleChange('description')}
            />

            <Button 
              onPress={() => this.props.handleSubmit(this.state.project)}
              style={{ margin: 20 }}
            >
              {
                this.props.isLoading ? <Loader /> :
                <Text>Submit</Text>
              }
            </Button>
          
        
        
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
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
