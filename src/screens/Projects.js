import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectList from '../components/ProjectList';
import Main from '../components/Main';
import { 
  loadUserProjects, 
  setCurrentProject, 
  loadProjectsCreated, 
  leaveProject 
} from '../store/actions/projects';

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

  handleEditPress = project => {
    const { setCurrentProject, navigation } = this.props;
    setCurrentProject(project);
    navigation.navigate('edit_project');
  };


  handleLeavePress = project => {
    Alert.alert(
      `Sure you want to leave ${project.title}?`,
      null,
      [
        { text: 'Cancel', style: 'cancel', onPress: () => {} },
        { text: 'Leave', style: 'destructive', onPress: async () => {
          this.props.leaveProject(project);
        }}
      ]
    )
  };

  render() {
    const { isLoading, error, created, collaborating } = this.props;

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
        <ProjectList 
          created={created}
          collaborating={collaborating} 
          handlePress={this.handlePress}
          handleEditPress={this.handleEditPress}
          handleLeavePress={this.handleLeavePress}
        />
      </Main>
    )
  }
}

const mapStateToProps = ({ projects, user }) => ({
  currentUserId: user.id,
  created: projects.created.all,
  collaborating: projects.collaborating.all,
  isLoading: projects.created.isLoading || projects.collaborating.isLoading,
  error: projects.created.error || projects.collaborating.error,
});

export default connect(mapStateToProps, {
  loadUserProjects,
  setCurrentProject,
  loadProjectsCreated,
  leaveProject 
})(ProjectsScreen);