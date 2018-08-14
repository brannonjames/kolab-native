import { USER } from './types';
import apiCall from '../../services/apiCall';

export const loginUser = user => async dispatch => {
  try {

      dispatch({ type: USER.LOGIN })

      let newUser = await apiCall({
        url: '/users/login',
        method: 'post',
        data: user
      });

      dispatch({
        type: USER.LOGIN_SUCCESS,
        payload: newUser
      });

  } catch (err) {

    dispatch({
      type: USER.LOGIN_FAIL,
      error: err.message || 'unknown error occured'
    });

  }
}