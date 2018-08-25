import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import Avatar from './Avatar';

class UserList extends Component {
  static defaultProps = {
    editMode: true,
    type: 'projects'
  }

  state = { currentSelected: null }


  renderUserList() {
    const { data } = this.props;
    const { listItemStyle, listItemTextStyle, bioStyle } = styles;
    return data.map((user, i) => (
      <TouchableOpacity 
        key={user.id}
        onPress={() => this.setState({ currentSelected: user.id })}
      >
        <View  
          onPress={() => {}}
          style={[listItemStyle, { borderBottomWidth: data.length - 1 === i ? 0 : 1 }]}
        >
          <Avatar uri={user.avatar_url} />
          <Text style={listItemTextStyle}>{user.username}</Text>
        </View>

        { this.state.currentSelected === user.id &&
          <View style={bioStyle}>
            <Text>{ user.bio || 'No Bio' }</Text>
          </View>
        }

      </TouchableOpacity>
    ));
  }
  render() {

    const { 
      container,
      listHeaderContainerStyle, 
      listHeaderTitleStyle, 
      listHeaderDirectionStyle ,
      listContainerStyle
    } = styles;
    const {
      editMode,
      header
    } = this.props;

    if (this.props.data.length === 0) {
      return null;
    }

    return (
      <View style={container}>
        <View style={listHeaderContainerStyle}>
          <Text style={listHeaderTitleStyle}>{header}</Text>
          { editMode && <Text style={listHeaderDirectionStyle}>Tap to edit</Text>}
        </View>
        <View style={listContainerStyle}>
          { this.renderUserList() }
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginLeft: 22,
    marginRight: 22
  },
  listHeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 2
  },
  listHeaderTitleStyle: {
    fontSize: 16
  },
  listHeaderDirectionStyle: {
    fontSize: 12,
    color: '#666'
  },
  listContainerStyle: {
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden'
  },
  listItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#666',
    borderBottomWidth: 1,
    backgroundColor: '#A3CEF1',
    padding: 8
    
  },
  listItemTextStyle: {
    fontSize: 16,
    marginLeft: 6
  },
  bioStyle: {
    backgroundColor: 'white',
    padding: 6
  }

}

export default UserList;