import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Main from './Main';

class ProjectList extends Component {

  renderProject = ({item}) => {
    return (
      <TouchableOpacity 
        key={item.id}
        onPress={() => this.props.handlePress(item)}
        style={styles.project}
      >
        <Text style={styles.projectText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  renderFooter = () => {
    if (this.props.data !== 0) {
      return null
    }
    return (
      <View>
        <Text>No Projects :(</Text>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <Main>
        <FlatList 
          data={data}
          renderItem={item => this.renderProject(item)}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={{ padding: 14 }}
        />
      </Main>
    );
  }
}

const styles = {
  project: {
    backgroundColor: '#8380B6',
    borderRadius: 6,
    padding: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    marginBottom: 14
  },
  projectText: {
    fontSize: 36,
    color: '#eee',
    fontWeight: 'bold',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#eee',
    shadowOpacity: 0.2
  }
}

export default ProjectList;