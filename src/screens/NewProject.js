import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New'
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>New Project Screen</Text>
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