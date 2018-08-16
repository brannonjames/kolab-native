import React from 'react';
import { View } from 'react-native';

export default ({ children, style }) => (
  <View style={[styles.container, style]}>
    { children }
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
};
