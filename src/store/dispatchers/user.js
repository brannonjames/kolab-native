import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
  id: 0,
  username: '',
  email: ''
}

export default (state=initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload;
    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;    
  }
}