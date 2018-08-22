import React, { Component } from 'react';
import { 
  View, 
  Text,
  SectionList,
  LayoutAnimation
} from 'react-native';

import Main from './Main';
import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {

  state = { scrollEnabled: true }

  enableScroll = scrollEnabled => {
    this.setState({ scrollEnabled });
  }

  renderProject = ({ item, section }) => (
    <ProjectListItem
      type={section.name}
      project={item} 
      enableScroll={this.enableScroll}
      handleProjectPress={this.props.handlePress.bind(null, item)}
      handleToolPress={() => {
        section.name === 'created' ? 
        this.props.handleEditPress(item) :
        this.props.handleLeavePress(item);
      }}
    />
  );
 

  renderSectionHeader = ({ section }) => (
    <Text>{section.title}</Text>
  );

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
    const { created, collaborating } = this.props;
    return (
      <Main>
        <SectionList 
          sections={[
            { title: 'Your Projects', data: created, name: 'created' },
            { title: 'Collaborating', data: collaborating, name: 'collaborating' }
          ]}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={item => this.renderProject(item)}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={{ padding: 14 }}
          scrollEnabled={this.state.scrollEnabled}
          stickySectionHeadersEnabled={false}
        />
      </Main>
    );
  }
}

export default ProjectList;