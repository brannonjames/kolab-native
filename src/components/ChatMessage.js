import React from 'react';
import { View, Text } from 'react-native';
import Avatar from './Avatar';

export default ({ 
  text, 
  user_id, 
  currentUserId,
  username,
  avatar_url
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
        <Avatar uri={avatar_url} style={{ marginRight: 6 }} />
        <View>
          <Text style={usernameStyle}>{username}</Text>
          <Text style={chatText}>{text}</Text>
        </View>
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
    padding: 6,
    flexDirection: 'row'
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