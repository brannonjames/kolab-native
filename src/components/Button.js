import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

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


const styles = {
  buttonStyle: {
    backgroundColor: '#A3CEF1',
    padding: 16,
    borderRadius: 6,
    shadowColor: '#222',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    fontSize: 20
  }
};