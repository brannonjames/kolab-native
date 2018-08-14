import apiCall from '../../services/apiCall';

import {
  LOAD_SWIPE_PROJECTS,
  LOAD_SWIPE_PROJECTS_SUCCESS,
  LOAD_SWIPE_PROJECTS_FAIL
} from './types';

export const loadProjects = () => async dispatch => {
  try {

    dispatch({ type: LOAD_SWIPE_PROJECTS });

    let projects = await apiCall({
      url: '/projects',
      method: 'get'
    });

    dispatch({
      type: LOAD_SWIPE_PROJECTS_SUCCESS,
      payload: projects
    });

  } catch (err) {

    dispatch({
      type: LOAD_SWIPE_PROJECTS_FAIL,
      error: err.message
    });

    throw new Error(err.message);

  }
}