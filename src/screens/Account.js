import React, { Component } from 'react';
import { Button as RNButton, View, ScrollView, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { loadProjectsCreated, setCurrentProject, loadUserProjects } from '../store/actions/projects';
import { logoutUser } from '../store/actions/auth';
import { updateBio } from '../store/actions/user';

import UpdateBio from '../components/UpdateBio';
import Main from '../components/Main';
import Button from '../components/Button';
import ProfileNumbers from '../components/ProfileNumbers';
import ProfileNumberData from '../components/ProfileNumberData';
import Avatar from '../components/Avatar';

class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('username') || 'Account',
  });

  state = {
    bio: ''
  }

  componentDidMount() {
    const { 
      navigation, 
      username,
      bio,
      loadProjectsCreated, 
      loadUserProjects 
    } = this.props;
    navigation.setParams({ username });
    loadProjectsCreated();
    loadUserProjects();
    this.setState({ bio })
  }

  handleBioUpdate = async () => {
    await this.props.updateBio(this.state.bio);
    Alert.alert(
      'Bio Updated',
      null,
      [
        { title: 'Great!', onPress: () => {}, style: 'cancel' }
      ]
    )
  }

  logout = async () => {
    const { logoutUser, navigation } = this.props;
    await logoutUser();
    navigation.navigate('auth');
  } 

  render() {
    return (
      <Main>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <ScrollView 
            contentContainerStyle={{ padding: 20 }}
          >
            

              <View style={{ justifyContent: 'space-around' }}>


                <Avatar 
                  size="large"
                  uri={this.props.avatarUrl}
                  style={{ alignSelf: 'center' }}
                />

                <Button 
                  title="New Photo" 
                  onPress={() => this.props.navigation.navigate('camera')} 
                  style={{ padding: 8, alignSelf: 'center' }}
                  />
              
              </View>


              <View>
                <ProfileNumbers>
                  <ProfileNumberData data={this.props.numCreated} title="Created" />
                  <ProfileNumberData data={this.props.numCollaborating} title="Collaborating" />
                </ProfileNumbers>
              </View>

              <UpdateBio 
                bio={this.state.bio}
                onChange={bio => this.setState({ bio })}
                handleBioUpdate={this.handleBioUpdate}
              />
            

            <Button 
              title="Logout"
              style={{ backgroundColor: '#ff8a82' }}
              onPress={this.logout}
            />
            
          </ScrollView>
        </KeyboardAvoidingView>
      </Main>
    );
  }
}

const mapStateToProps = ({ projects, user }) => ({
  username: user.username,
  avatarUrl: user.avatar_url,
  bio: user.bio, 
  projects: projects.created.all,
  numCreated: projects.created.all.length,
  numCollaborating: projects.collaborating.all.length
});

export default connect(mapStateToProps, {
  loadProjectsCreated, 
  logoutUser,
  setCurrentProject,
  loadUserProjects,
  updateBio
})(AccountScreen);