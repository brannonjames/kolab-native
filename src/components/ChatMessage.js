import React from 'react';
import { View, Text } from 'react-native';

export default ({ 
  text, 
  user_id, 
  currentUserId,
  username
}) => {
  const {
    chatContainer,
    chatBubble,
    chatText,
    userBubble,
    usernameStyle
  } = styles;
  if (user_id === currentUserId) {
    return (
      <View style={chatContainer}>
        <View style={[chatBubble, userBubble]}>
          <Text style={chatText}>{text}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={chatContainer}>
      <View style={chatBubble}>
        <Text style={usernameStyle}>{username}</Text>
        <Text style={chatText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = {
  chatContainer: {
    margin: 8,
    alignItems: 'flex-start'
    
  },
  chatBubble: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  chatText: {
    fontSize: 20
  },
  userBubble: {
    backgroundColor: '#A3CEF1',
    alignSelf: 'flex-end'
  },
  usernameStyle: {
    fontSize: 10,
    paddingBottom: 2
  }
}