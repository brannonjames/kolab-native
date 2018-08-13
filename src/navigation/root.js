import AuthScreen from '../screens/Auth';
import SwipeNavigation from './swipe';
import ProjectsNavigation from './projects';
import AccountNavigation from './account';

import {
  createBottomTabNavigator
} from 'react-navigation';

export default createBottomTabNavigator({
  auth: AuthScreen,
  app: {
    screen: createBottomTabNavigator({
      swipe: SwipeNavigation,
      projects: ProjectsNavigation,
      account: AccountNavigation
    })
  } 
}, {
    navigationOptions: {
      tabBarVisible: false
    }
});