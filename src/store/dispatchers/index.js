import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import swipe from './swipe';

export default combineReducers({
  auth,
  user,
  swipe
});