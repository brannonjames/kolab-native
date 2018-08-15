import apiCall from '../../services/apiCall';

import {
  LOAD_USER_PROJECTS,
  LOAD_USER_PROJECTS_SUCCESS,
  LOAD_USER_PROJECTS_FAIL
} from './types';

export const loadUserProjects = () => async dispatch => {
  try {

    dispatch({ type: LOAD_USER_PROJECTS });

    let projects = await apiCall({
      url: '/users/projects',
      method: 'get'
    });

    console.log(projects);
    dispatch({ type: LOAD_USER_PROJECTS_SUCCESS, payload: projects });

  } catch (err) {

    dispatch({ type: LOAD_USER_PROJECTS_FAIL });
    throw new Error(err.message);

  }
}