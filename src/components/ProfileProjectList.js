import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ProfileProjectList extends Component {
  static defaultProps = {
    editMode: true,
    type: 'projects'
  }
  renderProjectList() {
    const { onProjectPress, data, type } = this.props;
    const { listItemStyle, listItemTextStyle } = styles;
    if (type === 'projects') {
      return data.map((project, i) => (
        <TouchableOpacity 
          key={project.id} 
          onPress={onProjectPress.bind(null, project)}
          style={[listItemStyle, { borderBottomWidth: data.length - 1 === i ? 0 : 1 }]}
        >
          <Text style={listItemTextStyle}>{project.title}</Text>
        </TouchableOpacity>
      ));
    }
    if (type === 'users') {
      return data.map((user, i) => (
        <View 
          key={user.id} 
          onPress={() => {}}
          style={[listItemStyle, { borderBottomWidth: data.length - 1 === i ? 0 : 1 }]}
        >
          <Text style={listItemTextStyle}>{user.username}</Text>
        </View>
      ));
    }
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
          { this.renderProjectList() }
        </View>
      </View>
    );
  }
}

const styles = {
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
    borderColor: '#666',
    borderBottomWidth: 1,
    backgroundColor: '#E8F1F2',
    padding: 12
    
  },
  listItemTextStyle: {
    fontSize: 14
  }

}

export default ProfileProjectList;