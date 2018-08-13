import { createStackNavigator } from 'react-navigation';
import ProjectsScreen from '../screens/Projects';

export default createStackNavigator({
  project_stack: {
    screen: ProjectsScreen
  }
},
{
  navigationOptions: {
    title: 'Projects'
  }
});