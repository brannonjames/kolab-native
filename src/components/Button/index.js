import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default ({title, onPress, style, children}) => {
  const { buttonStyle, buttonTextStyle } = styles;
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[buttonStyle, style]}
    >
      <Text style={buttonTextStyle}>{title || children}</Text>
    </TouchableOpacity>
  );
}