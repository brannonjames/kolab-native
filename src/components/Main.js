import React from 'react';
import { View } from 'react-native';

export default ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
};
