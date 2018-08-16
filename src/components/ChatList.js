import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

class ChatList extends Component {

  renderChatMessage = ({ item }) => (
    <View style={styles.listItemStyle}>
      <Text style={styles.listItemTextStyle}>{item.message}</Text>
    </View>
  )

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.messages}
          renderItem={this.renderChatMessage}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listStyle}
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
  listStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  listItemStyle: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 8
  },
  listItemTextStyle: {
    fontSize: 20
  },
  deleteButtonStyle: {
    fontSize: 24,
    padding: 4,
    color: '#bbb'
  }
}