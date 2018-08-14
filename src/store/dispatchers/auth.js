import { USER } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    
    case USER.LOGIN:
    case USER.RESISTER:
    case USER.LOGOUT:
      return { error: null, isLoading: true };

    case USER.LOGIN_SUCCESS:
    case USER.RESISTER_SUCCESS:
    case USER.LOGOUT_SUCCESS:
      return { error: null, isLoading: false };


    case USER.LOGIN_FAIL:
    case USER.RESISTER_FAIL:
    case USER.LOGOUT_FAIL:
      return { error: action.error, isLoading: false }
          
    default:
      return state;    
  }
}