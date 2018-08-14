import mainStack from './app';
import modals from './modals';

import SplashScreen from '../screens/SplashScreen';

import { createStackNavigator } from 'react-navigation';

// bringing everything together and exporting
export default createStackNavigator({
  splash: SplashScreen,
  main_stack: mainStack,
  modals: modals
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
});