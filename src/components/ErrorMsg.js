import React from 'react';
import { Text, View } from 'react-native';

export default ({ error }) => {
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{error}</Text>
      </View>
    )
  } else {
    return null;
  }
}

const styles = {
  container: {
    margin: 18,
    alignSelf: 'center'
  },
  text: {
    color: 'red'
  }
}