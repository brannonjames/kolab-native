import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loadProjects, likeProject, rejectProject } from '../store/actions/swipe';

import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectDeck from '../components/ProjectDeck';
import Main from '../components/Main';

class SwipeScreen extends Component {
  
  async componentDidMount() {
    try {
      await this.props.loadProjects();
    } catch (err) {
      throw Error();
    }
  }

  handleSwipeRight = project => {
    this.props.likeProject(project);
  }

  handleSwipeLeft = project => {
    this.props.rejectProject(project);
  }

  render() {
    const { isLoading, projects, error } = this.props;

    if (isLoading) {
      return (
        <Main>
          <Loader />
        </Main>
      )
    }

    if (error) {
      return (
        <Main>
          <ErrorMsg error={error} />
        </Main>
      )
    }

    // ProjectDeck is where the magic happens, can you feel it? Can you feel the magic?
    return (
      <Main>
        <ProjectDeck 
          data={projects} 
          onSwipeLeft={this.handleSwipeLeft}
          onSwipeRight={this.handleSwipeRight}
        />
      </Main>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const mapStateToProps = ({ swipe }) => ({
  projects: swipe.projects,
  isLoading: swipe.isLoading,
  error: swipe.error
});

export default connect(mapStateToProps, { loadProjects, likeProject, rejectProject })(SwipeScreen);