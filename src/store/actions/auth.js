import { USER } from './types';
import axios from 'axios';

export const loginUser = ({ email, password }) => async dispatch => {
  try {

      let response = await axios.get({
        url: 'http://localhost:3060/api/projects'
      });

      console.log(response, 'good');

  } catch (err) {

    console.log(err);
    dispatch({
      type: USER.LOGIN_FAIL,
      error: err.message
    });

  }
}