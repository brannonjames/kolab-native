import React from 'react';
import { View, Text } from 'react-native';

export default ({ data, title }) => (
  <View style={styles.container}>
    <Text style={styles.dataStyle}>{data}</Text>
    <Text style={styles.titleStyle}>{title}</Text>
  </View>
);

const styles = {
  container: {
    alignItems: 'center',
    padding: 22,
  },
  dataStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleStyle: {
    fontSize: 18,
    textAlign: 'center'
  }
}