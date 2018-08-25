import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { createProject, clearProjectError } from '../store/actions/projects';

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

  handleSubmit = async project => {
    try {

      await this.props.createProject(project);
      this.props.navigation.navigate('app');

    } catch (err) {
      return false;
    }
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
              handleSubmit={this.handleSubmit}
              isLoading={this.props.isLoading}
            />

          
        </ScrollView>
      </Main>
    );
  }
}

const mapStateToProps = ({ projectForm }) => ({
  isLoading: projectForm.isLoading,
  error: projectForm.error
});

export default connect(mapStateToProps, { createProject, clearProjectError })(NewProjectScreen);