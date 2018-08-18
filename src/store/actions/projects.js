import apiCall from '../../services/apiCall';

import {
  LOAD_USER_PROJECTS,
  LOAD_USER_PROJECTS_SUCCESS,
  LOAD_USER_PROJECTS_FAIL,
  SET_CURRENT_PROJECT,

  LOAD_PROJECTS_CREATED,
  LOAD_PROJECTS_CREATED_SUCCESS,
  LOAD_PROJECTS_CREATED_FAIL

} from './types';

export const loadUserProjects = () => async dispatch => {
  try {

    dispatch({ type: LOAD_USER_PROJECTS });

    let projects = await apiCall({
      url: '/users/projects',
      method: 'get'
    });

    dispatch({ type: LOAD_USER_PROJECTS_SUCCESS, payload: projects });

  } catch (err) {

    dispatch({ type: LOAD_USER_PROJECTS_FAIL, error: err.message });
    throw new Error(err.message);

  }
}

export const loadProjectsCreated = () => async dispatch => {
  try {

    dispatch({ type: LOAD_PROJECTS_CREATED });

    let projects = await apiCall({
      url: '/users/projects?owner=true',
      method: 'get'
    });

    dispatch({ type: LOAD_PROJECTS_CREATED_SUCCESS, payload: projects });

  } catch (err) {

    dispatch({ type: LOAD_PROJECTS_CREATED_FAIL, error: err.message });
    throw new Error(err.message);

  }
}

export const setCurrentProject = project => dispatch => {
  dispatch({
    type: SET_CURRENT_PROJECT,
    payload: project
  });
}