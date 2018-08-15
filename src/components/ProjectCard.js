import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import TechList from './TechList';
import ProjectDescription from './ProjectDescription';

class ProjectCard extends Component {

  render() {
    const { title, description, technologies } = this.props;
    const { container, titleContainerStyle, titleTextStyle, detailsViewStyle } = styles;
    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>

          <View style={titleContainerStyle}>
            <Text style={titleTextStyle}>{title}</Text>
          </View>

          <View style={detailsViewStyle}>
            <TechList data={technologies} />
            <ProjectDescription text={description} />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor:  '#D1D1D1',
    margin: 20,
    borderRadius: 6,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2
  },
  detailsViewStyle: {
    backgroundColor: '#E8F1F2',
    flex: 1,
    alignItems: 'center',
    shadowOffset: { width: 0, height: -4 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6
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