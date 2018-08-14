import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SwipeScreen extends Component {
  // static navigationOptions = {
  //   title: 'Swipe'
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>Swipe Screen</Text>
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