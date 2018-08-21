import React, { Component } from 'react';
import { StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';

import { getProjectCollaborators } from '../store/actions/projects';

import Main from '../components/Main';
import ProjectCard from '../components/ProjectCard';
import ProfileProjectList from '../components/ProfileProjectList';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';

class ProjectDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('project') || 'Project Details',
    headerRight: (
      <Button 
        title="Done" 
        color="white" 
        onPress={() => {
          StatusBar.setBarStyle('default');
          navigation.pop();
        }} />
    ),
    headerStyle: {
      backgroundColor: '#8380B6',
    },
    headerTitleStyle: {
      color: 'white'
    }
  })

  componentDidMount() {
    const { navigation, project, getProjectCollaborators } = this.props;
    StatusBar.setBarStyle('light-content');
    navigation.setParams({ project: project.title });
    getProjectCollaborators();
  }

  render() {
    const { project, collaborators, error, isLoading } = this.props;
    return (
      <Main>
        <ProjectCard
          {...project}
          style={{ marginTop: 0, marginBottom: 0 }}
          header={false}
        >

        <ProfileProjectList 
          data={collaborators}
          type="users"
          header="Collaborators"
          editMode={false}
        />

        <ErrorMsg error={error} />

        { isLoading && <Loader /> }

        </ProjectCard>
      </Main>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  project: projects.current.project,
  collaborators: projects.current.collaborators,
  isLoading: projects.current.isLoading,
  error: projects.current.error
});

export default connect(mapStateToProps, { getProjectCollaborators })(ProjectDetailsScreen);