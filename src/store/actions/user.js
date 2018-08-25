import apiCall from '../../services/apiCall';
import {
  USER_LOGIN_SUCCESS,
  
  BIO_UPDATE,
  BIO_UPDATE_SUCCESS,
  BIO_UPDATE_FAIL

} from './types';

export const getCurrentUser = id => async dispatch => {
  try {

    let user = await apiCall({
      url: `/users/${id}`,
      method: 'get'
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user
    });

  } catch (err) {
    throw new Error(err.message);
  }
}

export const updateBio = bio => async dispatch => {
  try {

    dispatch({ type: BIO_UPDATE });

    let updatedUser = await apiCall({
      url: '/users/bio',
      method: 'put',
      data: { bio }
    });

    dispatch({ type: BIO_UPDATE_SUCCESS, payload: updatedUser });

  } catch (err) {
    dispatch({ type: BIO_UPDATE_FAIL, error: err.message });
    return null;
  }
}
