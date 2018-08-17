import { createStackNavigator } from 'react-navigation';
import ProjectsScreen from '../../screens/Projects';
import ChatScreen from '../../screens/Chat';


export default createStackNavigator({
  project_stack: ProjectsScreen,
  // chat: ChatScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4f8ff'
    }
  }
});