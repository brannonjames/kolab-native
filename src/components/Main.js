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
    backgroundColor: 'rgb(248, 248, 248)',
    // backgroundColor: '#E8F1F2',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  }
};
