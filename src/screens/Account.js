import React, { Component } from 'react';
import { Button as RNButton, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { loadProjectsCreated, setCurrentProject, loadUserProjects } from '../store/actions/projects';
import { logoutUser } from '../store/actions/auth';

import Main from '../components/Main';
import Button from '../components/Button';
import ProfileNumbers from '../components/ProfileNumbers';
import ProfileNumberData from '../components/ProfileNumberData';
import ProfileProjectList from '../components/ProfileProjectList';

class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('username') || 'Account',
    headerRight: <RNButton title="Create" onPress={() => navigation.navigate('new_project')} />
  });

  componentDidMount() {
    const { 
      navigation, 
      username, 
      loadProjectsCreated, 
      loadUserProjects 
    } = this.props;
    navigation.setParams({ username });
    loadProjectsCreated();
    loadUserProjects();
  }

  handleProjectPress = project => {
    const { setCurrentProject, navigation } = this.props;
    setCurrentProject(project);
    navigation.navigate('edit_project');
  }

  logout = async () => {
    const { logoutUser, navigation } = this.props;
    await logoutUser();
    navigation.navigate('auth');
  } 

  render() {
    return (
      <Main>
        <ScrollView 
          contentContainerStyle={{ padding: 20 }}
        >
        <View>
          <ProfileNumbers>
            <ProfileNumberData data={this.props.numCreated} title="Created" />
            <ProfileNumberData data={this.props.numCollaborating} title="Collaborating" />
          </ProfileNumbers>

          <ProfileProjectList 
            data={this.props.projects}
            onProjectPress={this.handleProjectPress}
            header="Project you created"
          />
        </View>

        <Button 
          title="Logout"
          style={{ margin: 44 }}
          onPress={this.logout}
        />
        </ScrollView>
      </Main>
    );
  }
}

const mapStateToProps = ({ projects, user }) => ({
  username: user.username,
  projects: projects.created.all,
  numCreated: projects.created.all.length,
  numCollaborating: projects.collaborating.all.length
});

export default connect(mapStateToProps, {
  loadProjectsCreated, 
  logoutUser,
  setCurrentProject,
  loadUserProjects
})(AccountScreen);