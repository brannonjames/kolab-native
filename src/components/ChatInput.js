import React, { Component } from 'react';
import { View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import SendButton from './SendButton';

const ChatInput = ({ onChange, message, onSubmit }) => {
  return (
    <View style={styles.containerStyle}>
      
        <TextInput 
          style={styles.inputStyle}
          onChangeText={onChange}
          value={message}
          multiline
        />

        <SendButton onPress={onSubmit} />
      
    </View>
  );
}

const styles = {
  containerStyle: {
    padding: 10,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputStyle: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8, 
    fontSize: 20,
    padding: 6,
    paddingLeft: 8,
    paddingTop: 6,
  },
  avatarStyle: {
    marginLeft: 8, 
    marginRight: 8
  }
}



export default ChatInput;