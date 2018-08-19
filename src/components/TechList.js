import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class TechList extends Component {
  static defaultProps = { data: [] }


  renderTechBoxes() {
    const { data, editMode, handlePress } = this.props;
    if (editMode) {
      return data.map((tech, i) => (
        <TouchableOpacity 
            key={i} 
            style={[styles.techStyle, { backgroundColor: tech.color }]}
            onPress={handlePress.bind(null, tech.name)}
          >
            <Text style={styles.techTextStyle}>{tech.name}</Text>
        </TouchableOpacity>
      ));
    } else {
      return data.map((tech, i) => (
        <View 
            key={i} 
            style={[styles.techStyle, { backgroundColor: tech.color }]}
          >
            <Text style={styles.techTextStyle}>{tech.name}</Text>
        </View>
      ));
    }
  }
    

  render() {
    this.renderTechBoxes();
    return (
      <View style={styles.techContainerStyle}>
        <Text style={styles.techHeaderStyle}>Technologies Used</Text>
        { this.props.editMode && <Text>Tap to remove</Text> }
        <View style={styles.techList}>
          {this.renderTechBoxes()}
        </View>
      </View>
    );
  }
}

const styles = {
  techContainerStyle: {
    padding: 18,
    alignItems: 'center'
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techHeaderStyle: {
    paddingBottom: 9,
    fontSize: 18,
    fontWeight: 'bold'
  },
  techStyle: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black', 
    margin: 2,
    padding: 6
  },
  techTextStyle: {
    fontSize: 18
  }
}

export default TechList;