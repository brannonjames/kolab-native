import React, { Component } from 'react';
import { Button as RNButton } from 'react-native';
import { connect } from 'react-redux';
import { loadProjectsCreated } from '../store/actions/projects';

import Main from '../components/Main';
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
    
  }

  render() {
    return (
      <Main style={{ justifyContent: 'flex-start' }}>
        <ProfileNumbers>
          <ProfileNumberData data={4} title="Created" />
          <ProfileNumberData data={9} title="Collaborating" />
        </ProfileNumbers>

        <ProfileProjectList 
          data={this.props.projects}
          onProjectPress={this.handleProjectPress}
        />

      </Main>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.created.all
});

export default connect(mapStateToProps, { loadProjectsCreated })(AccountScreen);