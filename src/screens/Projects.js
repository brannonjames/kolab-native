import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadUserProjects, setCurrentProject, loadProjectsCreated } from '../store/actions/projects';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectList from '../components/ProjectList';

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
        <View style={styles.container}>
          <Loader />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.container}>
          <ErrorMsg error={error} />
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <ProjectList data={projects} handlePress={this.handlePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = ({ projects }) => ({
  projects: projects.collaborating.all,
  isLoading: projects.created.isLoading || projects.collaborating.isLoading,
  error: projects.created.error || projects.collaborating.error,
});

export default connect(mapDispatchToProps, {
  loadUserProjects,
  setCurrentProject,
  loadProjectsCreated 
})(ProjectsScreen);