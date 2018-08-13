import mainStack from './app';
import modals from './modals';

import { createStackNavigator } from 'react-navigation';

// bringing everything together and exporting
export default createStackNavigator({
  main_stack: mainStack,
  modals: modals
}, { mode: 'modal',  headerMode: 'none'});