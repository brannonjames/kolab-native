import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/Auth';
import SwipeNavigation from './nav_screens/swipe';
import ProjectsNavigation from './nav_screens/projects';
import AccountNavigation from './nav_screens/account';

import ChatScreen from '../screens/Chat';

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
}, {
  tabBarOptions: {
    activeBackgroundColor: '#f4f8ff',
    inactiveBackgroundColor: '#f4f8ff'
  }
});

// app navigation bundles with seperate auth view
export default createStackNavigator({
  auth: AuthScreen,
  app: appTabs,
  chat: createStackNavigator({
    chat: ChatScreen 
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4f8ff'
      }
    }
  })
}, {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false,
    },
    animationEnabled: 'false'
});