import React, { Component } from 'react';
import { FlatList, Text, View, LayoutAnimation } from 'react-native';

class ChatList extends Component {

  renderChatMessage = ({ item }) => (
    <View style={styles.listItemStyle}>
      <Text style={styles.listItemTextStyle}>{item.text}</Text>
    </View>
  );

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          inverted
          data={this.props.messages.reverse()}
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
  listItemStyle: {
    height: 50,
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