import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projects';

import ProjectForm from '../components/ProjectForm';
import Main from '../components/Main';
import ErrorMsg from '../components/ErrorMsg';

class NewProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New'
  });

  handleSubmit = project => {
    this.props.createProject(project);
  }

  render() {
    return (
      <Main style={{ justifyContent: 'flex-start' }}>

        <ErrorMsg error={this.props.error} />

        <ProjectForm 
          handleSubmit={this.handleSubmit}
          isLoading={this.props.isLoading}
        />

      </Main>
    );
  }
}

const mapStateToProps = ({ projectForm }) => ({
  // isLoading: projectForm.isLoading,
  // error: projectForm.error
});

export default connect(mapStateToProps, { createProject })(NewProjectScreen);