import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from './src/screens/Auth';

export default class App extends React.Component {
  render() {
    return <AuthScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
