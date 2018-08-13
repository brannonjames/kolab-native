import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProjectsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Projects',
    headerRight: <Button title="Chat" onPress={() => navigation.navigate('chat')} />
  });


  render() {
    return (
      <View style={styles.container}>
        <Text>Projects Screen</Text>
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