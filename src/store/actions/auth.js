import apiCall from '../../services/apiCall';

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


export const clearAuthError = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_ERROR
  });
}

export const loginUser = userInfo => async dispatch => {
  try {

      dispatch({ type: USER_LOGIN })

      let user = await apiCall({
        url: '/users/login',
        method: 'post',
        data: userInfo
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      });

  } catch (err) {

    dispatch({
      type: USER_LOGIN_FAIL,
      error: err.message || 'unknown error occured'
    });

    throw Error();

  }
}

export const signupUser = userInfo => async dispatch => {
  try {

    dispatch({ type: USER_SIGNUP });

    await apiCall({
      url: '/users/register',
      method: 'post',
      data: userInfo
    });

    dispatch({ type: USER_SIGNUP_SUCCESS });

  } catch (err) {

    dispatch({
      type: USER_SIGNUP_FAIL,
      error: err.message
    });

    throw Error();

  }
}