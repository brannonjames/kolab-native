import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
      </View>
    );
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