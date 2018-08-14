import apiCall from '../../services/apiCall';
import { USER_LOGIN_SUCCESS } from './types';

export const getCurrentUser = id => async dispatch => {
  try {

    console.log(id);
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