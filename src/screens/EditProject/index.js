import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EditProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit'
  });
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit Project Screen</Text>
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