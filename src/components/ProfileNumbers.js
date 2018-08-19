import React from 'react';
import { View } from 'react-native';

export default ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20
  }
}