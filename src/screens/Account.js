import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AccountScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button title="New" onPress={() => this.props.navigation.navigate('new_project')} />
        <Button title="Edit" onPress={() => this.props.navigation.navigate('edit_project')} />
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