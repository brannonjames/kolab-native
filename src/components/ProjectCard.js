import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated } from 'react-native';
import { PanResponder } from 'react-native';
import TechList from './TechList';
import ProjectDescription from './ProjectDescription';

class ProjectCard extends Component {

 
  render() {
    const { title, description, technologies } = this.props;
    const { container, titleContainerStyle, titleTextStyle, detailsViewStyle } = styles;
    return (
      <View style={container}>

          <View style={titleContainerStyle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>

          <View style={detailsViewStyle}>
            <TechList data={technologies} />
            <ProjectDescription text={description} />
          </View>

      </View>
    );
  }
}

const styles = {
  container: {
    margin: 20,
    top: 0,
    bottom: 0,
    position: 'absolute',
    borderRadius: 6,
  },
  detailsViewStyle: {
    backgroundColor: '#E8F1F2',
    flex: 1,
    alignItems: 'center',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#8380B6'
  },
  titleContainerStyle: {
    backgroundColor: '#8380B6',
    alignSelf: 'stretch',
    padding: 18,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  titleTextStyle: {
    fontSize: 52,
    textAlign: 'center',
    color: '#eee',
    fontWeight: 'bold',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#eee',
    shadowOpacity: 0.2

  }
}

export default ProjectCard;