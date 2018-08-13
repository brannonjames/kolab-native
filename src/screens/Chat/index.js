import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat'
  });

  
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
        <Button
          title="Project"
          onPress={() => this.props.navigation.navigate('project_details')}
        />
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