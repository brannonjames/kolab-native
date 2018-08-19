import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/Auth';
import SwipeNavigation from './nav_screens/swipe';
import ProjectsNavigation from './nav_screens/projects';
import AccountNavigation from './nav_screens/account';

import { Ionicons } from '@expo/vector-icons';

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
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName) {
        case 'swipe':
          iconName = `ios-browsers${focused ? '' : '-outline'}`;
          break;
        case 'projects':
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
          break;
        case 'account':
          iconName = `ios-apps${focused ? '' : '-outline'}`; 
          break; 
      }
      return <Ionicons name={iconName} size={26} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#8380B6',
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