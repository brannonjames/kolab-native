import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <Button 
          title="login"
          onPress={() => this.props.navigation.navigate('app')}
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