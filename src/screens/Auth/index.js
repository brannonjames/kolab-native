import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}