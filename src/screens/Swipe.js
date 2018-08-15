import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loadProjects } from '../store/actions/swipe';

import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';
import ProjectDeck from '../components/ProjectDeck';

class SwipeScreen extends Component {
  
  async componentDidMount() {
    await this.props.loadProjects();
  }

  render() {
    const { isLoading, projects, error } = this.props;

    if (isLoading) {
      return <Loader color="blue" />
    }

    if (error) {
      return <ErrorMsg error={error} />
    }

    return (
      <View style={styles.container}>
        <ProjectDeck data={projects} />
      </View>
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

export default connect(mapStateToProps, { loadProjects })(SwipeScreen);