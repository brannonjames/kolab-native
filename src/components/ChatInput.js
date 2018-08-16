import React, { Component } from 'react';
import { View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import SendButton from './SendButton';

const styles = {
  containerStyle: {
    padding: 10,
    // height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputStyle: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8, 
    fontSize: 20,
    // height: 36,
    padding: 6,
    paddingLeft: 8,
    paddingTop: 6,
  },
  avatarStyle: {
    marginLeft: 8, 
    marginRight: 8
  }
}



class ChatInput extends Component {

  state = { message: '' }

  handleSubmit(){
    this.props.handleSubmit(this.state.message);
    this.setState({ message: '' });
  }

  render(){
    return (


         

      
      <View style={styles.containerStyle}>
      
      <TextInput 
      style={styles.inputStyle}
      onChangeText={message => this.setState({ message })}
      value={this.state.message}
      multiline
    />

    <SendButton onPress={() => this.handleSubmit(this.state.message)} />
      
      </View>
      
      
      



      

  
      

    )
  }
}

export default ChatInput;