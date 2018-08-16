import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadUserProjects, setCurrentProject } from '../store/actions/projects';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectList from '../components/ProjectList';

class ProjectsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({ title: 'Projects' });

  componentDidMount() {
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

    return <ProjectList data={projects} handlePress={this.handlePress} />
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
  projects: projects.all,
  isLoading: projects.isLoading,
  error: projects.error
});

export default connect(mapDispatchToProps, { loadUserProjects, setCurrentProject })(ProjectsScreen);