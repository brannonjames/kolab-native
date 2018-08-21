import React, { Component } from 'react';
import { 
  View, 
  Text,
  FlatList,
} from 'react-native';

import Main from './Main';
import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {

  state = { scrollEnabled: true }

  enableScroll = scrollEnabled => {
    this.setState({ scrollEnabled });
  }

  renderProject = ({item}) => (
    <ProjectListItem 
      project={item} 
      enableScroll={this.enableScroll}
    />
  )

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
          scrollEnabled={this.state.scrollEnabled}
        />
      </Main>
    );
  }
}

export default ProjectList;