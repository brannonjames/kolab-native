import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator 
      size={size || 'small'} 
      color={color || 'gray'} 
    />
  </View>
);

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}