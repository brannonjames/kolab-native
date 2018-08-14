import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default ({title, onPress, style, children}) => {

  const renderChild = () => {
    if (children) {
      return children;
    }
    return <Text style={styles.buttonTextStyle}>{title}</Text>
  }

  const { buttonStyle } = styles;
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[buttonStyle, style]}
    >
      
      { renderChild() }

    </TouchableOpacity>
  );
}