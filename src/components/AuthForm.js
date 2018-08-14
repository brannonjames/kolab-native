import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

export default ({children}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      { children }
    </KeyboardAvoidingView>
  );
}

const styles = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 36
  }
}