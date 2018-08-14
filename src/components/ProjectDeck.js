import React, { Component } from 'react';
import { View } from 'react-native';

import ProjectCard from './ProjectCard';

class ProjectDeck extends Component {

  renderCards() {
    return this.props.data.map(project => (
      <ProjectCard key={project.id} {...project}  />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderCards() }
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignSelf: 'stretch'
  }
}

export default ProjectDeck;