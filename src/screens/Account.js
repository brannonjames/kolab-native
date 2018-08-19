import React, { Component } from 'react';
import { Button as RNButton, View } from 'react-native';
import { connect } from 'react-redux';
import { loadProjectsCreated, setCurrentProject } from '../store/actions/projects';
import { logoutUser } from '../store/actions/auth';

import Main from '../components/Main';
import Button from '../components/Button';
import ProfileNumbers from '../components/ProfileNumbers';
import ProfileNumberData from '../components/ProfileNumberData';
import ProfileProjectList from '../components/ProfileProjectList';

class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <RNButton title="Create" onPress={() => navigation.navigate('new_project')} />
  });

  componentDidMount() {
    this.props.loadProjectsCreated();
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
      <Main style={{ justifyContent: 'space-between' }}>
        <View>
          <ProfileNumbers>
            <ProfileNumberData data={this.props.numCreated} title="Created" />
            <ProfileNumberData data={this.props.numCollaborating} title="Collaborating" />
          </ProfileNumbers>

          <ProfileProjectList 
            data={this.props.projects}
            onProjectPress={this.handleProjectPress}
          />
        </View>

        <Button 
          title="Logout"
          style={{ marginBottom: 50 }}
          onPress={this.logout}
        />

      </Main>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.created.all,
  numCreated: projects.created.all.length,
  numCollaborating: projects.collaborating.all.length
});

export default connect(mapStateToProps, {
  loadProjectsCreated, 
  logoutUser,
  setCurrentProject
})(AccountScreen);