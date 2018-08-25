import React, { Component } from 'react';
import { FlatList, Text, View, LayoutAnimation } from 'react-native';
import ChatMessage from './ChatMessage';

class ChatList extends Component {

  renderChatMessage = ({ item }) => (
      <ChatMessage 
        key={item.id} 
        {...item} 
        currentUserId={this.props.currentUserId} 
      />
  );

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          inverted
          data={this.props.messages}
          renderItem={this.renderChatMessage}
          keyExtractor={item => String(item.id)}
        />
      </View>
    )
  }
}

export default ChatList;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  deleteButtonStyle: {
    fontSize: 24,
    padding: 4,
    color: '#bbb'
  }
}