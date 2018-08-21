import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated } from 'react-native';
import { PanResponder } from 'react-native';
import TechList from './TechList';
import ProjectDescription from './ProjectDescription';

class ProjectCard extends Component {
  static defaultProps = {
    header: true
  }
 
  render() {
    const { title, description, technologies, children, style, header } = this.props;
    const { container, titleContainerStyle, titleTextStyle, detailsViewStyle } = styles;
    return (
      <View style={[container, style]}>
        
          { header && 
            <View style={titleContainerStyle}>
              <Text style={titleTextStyle}>{title}</Text>
            </View> 
          }
          
          

          <View style={detailsViewStyle}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
              <TechList data={technologies} />
              <ProjectDescription text={description} />
            </ScrollView>
          </View>

          { children }
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 20
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