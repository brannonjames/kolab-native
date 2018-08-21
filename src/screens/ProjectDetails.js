import React, { Component } from 'react';
import { StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';

import Main from '../components/Main';
import ProjectCard from '../components/ProjectCard';

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
    const { navigation, project } = this.props;
    StatusBar.setBarStyle('light-content');
    navigation.setParams({ project: project.title });
  }

  render() {
    return (
      <Main>
        <ProjectCard
          {...this.props.project}
          style={{ marginTop: 0, marginBottom: 0 }}
          header={false}
        >

        </ProjectCard>
      </Main>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  project: projects.current.project
});

export default connect(mapStateToProps)(ProjectDetailsScreen);