import React from 'react';
import { View, TextInput } from 'react-native';

export default ({ 
  placeholder,
  onChange,
  inputStyle,
  containerStyle, 
  value, 
  onSubmitEditing, 
  returnKeyType,
  onFocus,
  onBlur
}) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput 
      multiline
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      style={[styles.input, inputStyle]}
      returnKeyType={returnKeyType || "done"}
      blurOnSubmit={true}
      onSubmitEditing={onSubmitEditing || (() => {})}
      onFocus={onFocus}
      onBlur={onBlur}
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