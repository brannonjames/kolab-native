import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  SAVE_AVATAR_SUCCESS
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

    case SAVE_AVATAR_SUCCESS:
      return action.payload;
       
    default:
      return state;    
  }
}