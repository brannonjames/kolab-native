import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import ProjectForm from '../components/ProjectForm';
import Main from '../components/Main';
import ErrorMsg from '../components/ErrorMsg';

class NewProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New'
  });

  render() {
    return (
      <Main style={{ justifyContent: 'flex-start' }}>

        <ErrorMsg error={this.props.error} />

        <ProjectForm 
          handleSubmit={() => {}}
          isLoading={this.props.isLoading}
        />

      </Main>
    );
  }
}

const mapStateToProps = ({ projectForm }) => ({
  isLoading: projectForm.isLoading,
  error: projectForm.error
});

export default connect()(NewProjectScreen);