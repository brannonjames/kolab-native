import React from 'react';
import ProjectDetails from '../screens/ProjectDetails';
import NewProject from '../screens/NewProject';
import EditProject from '../screens/EditProject';
import { Button } from 'react-native';

import { createStackNavigator } from 'react-navigation';

// I have to define my modals in the root so they
// cover any other tab bars or headers
export default createStackNavigator({
  project_details: ProjectDetails,
  new_project: NewProject,
  edit_project: EditProject
}, {
  navigationOptions: ({navigation}) => ({
    headerLeft: null,
    headerRight: <Button title="Cancel" onPress={() => navigation.navigate('app') } />
  })
});