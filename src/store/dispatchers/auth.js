import { 
  CLEAR_AUTH_ERROR,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    
    // you can stack cases ontop of each other like this
    // if you need multiple to return the same thing apparently
    // super cool
    case USER_LOGIN:
    case USER_SIGNUP:
    case USER_LOGOUT:
      return { error: null, isLoading: true };

    case USER_LOGIN_SUCCESS:
    case USER_SIGNUP_SUCCESS:
    case USER_LOGOUT_SUCCESS:
      return { error: null, isLoading: false };


    case USER_LOGIN_FAIL:
    case USER_SIGNUP_FAIL:
    case USER_LOGOUT_FAIL:
      return { error: action.error, isLoading: false }

    case CLEAR_AUTH_ERROR:
      return { ...state, error: null }  
          
    default:
      return state;    
  }
}