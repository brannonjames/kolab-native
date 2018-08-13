import { createStackNavigator } from 'react-navigation';
import AccountScreen from '../../screens/Account';

export default createStackNavigator({
  account_stack: {
    screen: AccountScreen
  }
},
{
  navigationOptions: {
    title: 'Account'
  }
});