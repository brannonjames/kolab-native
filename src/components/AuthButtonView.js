import React from 'react';
import { View, Text } from 'react-native';
import Loader from './Loader';
import Button from './Button';

export default ({ authType, onSubmit, toggleAuth, isLoading }) => {
  return (
    <View style={styles.container}>
      <Button 
        onPress={onSubmit} 
        title={authType} 
        style={{ marginLeft: 0, marginRight: 0 }}
      >
        { isLoading &&
          <Loader />
        }
      </Button>

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