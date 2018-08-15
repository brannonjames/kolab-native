import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/Auth';
import SwipeNavigation from './nav_screens/swipe';
import ProjectsNavigation from './nav_screens/projects';
import AccountNavigation from './nav_screens/account';

// navigation bar for the three main views you see after logging in
const appTabs = createBottomTabNavigator({
  swipe: {
    screen: SwipeNavigation,
    navigationOptions: { title: 'Swipe' }
  },
  projects: {
    screen: ProjectsNavigation,
    navigationOptions: { title: 'Projects' }
  },
  account: {
    screen: AccountNavigation,
    navigationOptions: { title: 'Account' }
  }
});

// app navigation bundles with seperate auth view
export default createStackNavigator({
  auth: AuthScreen,
  app: appTabs
}, {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false
    },
    animationEnabled: 'false'
});