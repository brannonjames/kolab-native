import React, { Component } from 'react';
import { View, Text } from 'react-native';

const COLORS = ['#80CED7', '#DC493A', '#84DCC6', '#ACD7EC', '#8B95C9'];

class TechList extends Component {

  pickRandomColor() {
    const rand = Math.floor(Math.random() * COLORS.length);
    return COLORS[rand];
  }

  renderTechnologies() {
    return this.props.data.map((tech, i) => (
      <View 
      key={i} 
      style={[styles.techStyle, { backgroundColor: this.pickRandomColor() }]}
      >
        <Text style={styles.techTextStyle}>{tech}</Text>
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.techContainerStyle}>
        <Text style={styles.techHeaderStyle}>Technologies Used</Text>
        <View style={styles.techList}>
          {this.renderTechnologies()}
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
    margin: 2,
    padding: 6
  },
  techTextStyle: {
    fontSize: 18
  }
}

export default TechList;