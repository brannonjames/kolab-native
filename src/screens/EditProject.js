import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { 
  clearProjectError, 
  updateProject, 
  deleteProject 
} from '../store/actions/projects';

import ProjectForm from '../components/ProjectForm';
import Main from '../components/Main';
import ErrorMsg from '../components/ErrorMsg';

class NewProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create Project'
  });

  state = { avoidKeyboard: false }

  componentDidMount() {
    if (this.props.error) {
      this.props.clearProjectError();
    }
  }

  handleUpdate = async project => {
    try {

      const { updateProject, navigation } = this.props;

      await updateProject(project);
      navigation.navigate('account');

    } catch (err) {
      return false;
    }
  }

  handleDelete = project => {

  }

  render() {
    return (
      <Main style={{ justifyContent: 'flex-start' }}>
      
        <ScrollView 
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
        >
      

            <ErrorMsg error={this.props.error} />

            <ProjectForm 
              initialState={this.props.project}
              handleUpdate={this.handleUpdate}
              isLoading={this.props.isLoading}
            />

          
        </ScrollView>
      </Main>
    );
  }
}

const mapStateToProps = ({ projectForm, projects }) => ({
  isLoading: projectForm.isLoading,
  error: projectForm.error,
  project: projects.current.project
});

export default connect(mapStateToProps, {
  updateProject, 
  deleteProject, 
  clearProjectError 
})(NewProjectScreen);