import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

class ProjectCard extends Component {

  renderTechnologies() {
    return this.props.technologies.map((tech, i) => (
      <View key={i} style={styles.techStyle}>
        <Text style={styles.techTextStyle}>{tech}</Text>
      </View>
    ));
  }

  render() {
    const { title, technologies, description } = this.props;
    const { container, titleContainerStyle, titleTextStyle, techContainerStyle } = styles;
    return (
      <View style={container}>
        <ScrollView>

          <View style={titleContainerStyle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>

          <View style={techContainerStyle}>
            { this.renderTechnologies() }
          </View>

          <View>
            <Text>{description}</Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E7ECEF',
    margin: 20,
    padding: 20,
    borderRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2
  },
  titleContainerStyle: {
    marginBottom: 20
  },
  titleTextStyle: {
    fontSize: 52,
    textAlign: 'center'
  },
  techContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  techStyle: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 2,
    padding: 6
  },
  techTextStyle: {
    fontSize: 18
  }
}

export default ProjectCard;