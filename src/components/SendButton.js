import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const styles = {
  buttonStyle: {
    width: 70,
    height: 40,
    borderColor: 'grey' ,
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 22
  }
}

export default ({ onPress, title="Send", style }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  </TouchableOpacity>
);