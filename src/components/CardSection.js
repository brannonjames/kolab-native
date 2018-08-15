import React from 'react';
import { View } from 'react-native';

export default ({ children, style }) => (
  <View style={[styles.style, style]}>
    { children }
  </View>
);

const styles = {
  container: {
    padding: 12
  }
}