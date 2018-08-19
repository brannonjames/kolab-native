import React from 'react';
import { View, TextInput } from 'react-native';

export default props => {
  const {
    returnKeyType,
    contentType,
    onChangeText,
    inputStyle,
    containerStyle,
    value,
    placeholder,
    password
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        secureTextEntry={password} 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        textContentType={contentType}
        autoCapitalize="none"
        returnKeyType={returnKeyType || "done"}
        keyboardShouldPersistTaps="never"
      />
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.8)',
    borderBottomWidth: 1,
    padding: 4,
    margin: 20 
  },
  input: {
    flex: 1,
    fontSize: 20
  }
}