import { createStackNavigator } from 'react-navigation';
import SwipeScreen from '../../screens/Swipe';

export default createStackNavigator({
  swipe_stack: {
    screen: SwipeScreen
  }
},
{
  navigationOptions: {
    title: 'Swipe',
    headerStyle: {
      backgroundColor: '#f4f8ff'
    }
  }
});