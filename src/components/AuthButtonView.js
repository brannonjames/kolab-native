import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Button from './Button';

export default ({ authType, onSubmit, toggleAuth }) => {
  return (
    <View style={styles.container} behavior="padding">
      <Button 
        title={authType}
        onPress={onSubmit}
      />

      <Text style={styles.buttonSeperator}>-or-</Text>

      <Button 
        onPress={toggleAuth}
        style={styles.toggleAuthStyle}
      >
        <Text style={styles.toggleAuthTextStyle}>
          {authType === 'Sign Up' ? 'Login' : 'Sign Up'}
        </Text>

      </Button>
    </View>
  )
}

const styles = {
  container: {
    margin: 40,
    width: 200
  },
  buttonSeperator: {
    alignSelf: 'center',
    margin: 8
  },
  toggleAuthStyle: {
    padding: 8,
    backgroundColor: '#6096BA',
    marginLeft: 12,
    marginRight: 12,
  },
  toggleAuthTextStyle: {
    fontSize: 14,
    color: 'white'
  }
}