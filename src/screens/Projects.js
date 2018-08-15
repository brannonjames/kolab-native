import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadUserProjects } from '../store/actions/projects';
import { connect } from 'react-redux';

class ProjectsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({ title: 'Projects' });

  componentDidMount() {
    // this.props.loadUserProjects();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Projects Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default connect(null, { loadUserProjects })(ProjectsScreen);
export default ProjectsScreen;