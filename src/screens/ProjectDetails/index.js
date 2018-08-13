import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProjectDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Project Details',
    headerRight: <Button title="Done" onPress={() => navigation.pop()} />
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>Project Details Screen</Text>
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