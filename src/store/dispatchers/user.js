import { USER } from '../actions/types';

export default (state=null, action) => {
  switch(action.type) {
    case USER.LOGIN_SUCCESS:
      return action.payload;
    case USER.LOGOUT_SUCCESS:
      return null;
    default:
      return state;    
  }
}