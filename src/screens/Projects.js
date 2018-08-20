import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadUserProjects, setCurrentProject, loadProjectsCreated } from '../store/actions/projects';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectList from '../components/ProjectList';
import Main from '../components/Main';

class ProjectsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({ title: 'Projects' });

  componentDidMount() {
    this.props.loadProjectsCreated();
    this.props.loadUserProjects();
  }

  handlePress = project => {
    this.props.setCurrentProject(project);
    this.props.navigation.navigate('chat');
  }

  render() {
    const { isLoading, error, projects } = this.props;

    if (isLoading) {
      return (
        <Main>
          <Loader />
        </Main>
      );
    }

    if (error) {
      return (
        <Main>
          <ErrorMsg error={error} />
        </Main>
      );
    }
    
    return (
      <Main>
        <ProjectList data={projects} handlePress={this.handlePress} />
      </Main>
    )
  }
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.collaborating.all,
  isLoading: projects.created.isLoading || projects.collaborating.isLoading,
  error: projects.created.error || projects.collaborating.error,
});

export default connect(mapStateToProps, {
  loadUserProjects,
  setCurrentProject,
  loadProjectsCreated 
})(ProjectsScreen);