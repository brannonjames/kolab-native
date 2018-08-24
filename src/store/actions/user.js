import apiCall from '../../services/apiCall';
import { USER_LOGIN_SUCCESS } from './types';

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

    let updatedBio = await apiCall({
      url: '/users/bio',
      method: 'put',
      data: { bio }
    });

    dispatch({ type: BIO_UPDATE_SUCCESS, payload: updatedBio });


  } catch (err) {
    dispatch({ type: BIO_UPDATE_FAIL, error: err.message });
    return null;
  }
}
