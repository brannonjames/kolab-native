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

  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,

  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,

  GET_PROJECT_COLLABORATORS,
  GET_PROJECT_COLLABORATORS_SUCCESS,
  GET_PROJECT_COLLABORATORS_FAIL,

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

export const updateProject = project => async dispatch => {
  try {

    dispatch({ type: UPDATE_PROJECT });

    let updatedProject = await apiCall({
      url: `/projects/${project.id}`,
      method: 'put',
      data: project
    });

    dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: updatedProject });

  } catch (err) {

    dispatch({ type: UPDATE_PROJECT_FAIL, error: err.message });
    throw new Error(err.message);

  }
}

export const deleteProject = project => async dispatch => {
  try {

    dispatch({ type: DELETE_PROJECT });

    let deletedProject = await apiCall({
      url: `/projects/${project.id}`,
      method: 'delete'
    });

    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: deletedProject });

  } catch (err) {

    dispatch({ type: DELETE_PROJECT_FAIL, error: err.message });
    throw new Error(err.message);

  }
}

export const getProjectCollaborators = () => async (dispatch, getState) => {
  try {

    const currentProjectId = getState().projects.current.project.id;

    dispatch({ type: GET_PROJECT_COLLABORATORS });

    let collaborators = await apiCall({
      url: `/projects/${currentProjectId}/collaborators`,
      method: 'get'
    });

    dispatch({ type: GET_PROJECT_COLLABORATORS_SUCCESS, payload: collaborators });

  } catch (err) {
    dispatch({ type: GET_PROJECT_COLLABORATORS_FAIL, error: 'Could Not Load Collaborators' });
    return null

  }
}