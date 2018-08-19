import apiCall from '../../services/apiCall';

import {
  LOAD_USER_PROJECTS,
  LOAD_USER_PROJECTS_SUCCESS,
  LOAD_USER_PROJECTS_FAIL,
  SET_CURRENT_PROJECT,

  LOAD_PROJECTS_CREATED,
  LOAD_PROJECTS_CREATED_SUCCESS,
  LOAD_PROJECTS_CREATED_FAIL,

  CREATE_PROJECT,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,

  CLEAR_PROJECT_FORM_ERROR

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

export const createProject = project => async dispatch => {
  try {

    dispatch({ type: CREATE_PROJECT });

    if (project.title.length === 0) {
      throw Error('Title is required');
    }

    if (project.technologies.length === 0) {
      throw Error('You need to add at least one technology');
    }

    if (project.description.length === 0) {
      throw Error('Please give a description');
    }

    let newProject = await apiCall({
      url: '/projects',
      method: 'post',
      data: project
    });

    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: newProject });

  } catch (err) {

    dispatch({ type: CREATE_PROJECT_FAIL, error: err.message });
    throw new Error(err.message);
  }
}

export const clearProjectError = () => dispatch => {
  dispatch({ type: CLEAR_PROJECT_FORM_ERROR });
}