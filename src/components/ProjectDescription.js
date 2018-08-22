import React from 'react';
import { View, Text } from 'react-native';

export default ({ text }) => {
  if (text) {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text>{text}</Text>
      </View>
    );
  }
  return null;
}

const styles = {
  container: {
    padding: 18,
    alignItems: 'center'
  },
  descriptionHeader: {
    paddingBottom: 9,
    fontSize: 18,
    fontWeight: 'bold'
  }
}