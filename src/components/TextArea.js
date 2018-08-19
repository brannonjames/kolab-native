import React from 'react';
import { View, TextInput } from 'react-native';

export default ({ placeholder, onChange, inputStyle, containerStyle, value }) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput 
      multiline
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      style={[styles.input, inputStyle]}
    />
  </View>
);

const styles = {
  container: {
    height: 180,
    backgroundColor: '#eee',
    margin: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 6,
    padding: 6
  },
  input: {
    flex: 1,
    fontSize: 18
  }
}