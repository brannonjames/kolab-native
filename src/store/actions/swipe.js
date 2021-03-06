import apiCall from '../../services/apiCall';

import {
  LOAD_SWIPE_PROJECTS,
  LOAD_SWIPE_PROJECTS_SUCCESS,
  LOAD_SWIPE_PROJECTS_FAIL,

  LIKE_PROJECT,
  LIKE_PROJECT_SUCCESS,
  LIKE_PROJECT_FAIL,

  REJECT_PROJECT,
  REJECT_PROJECT_SUCCESS,
  REJECT_PROJECT_FAIL
} from './types';

// Loads all the projects the current user has not seen to the swipe deck
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

// at this point likeProject and rejectProject shooooould be just one function
// but I'm holding out that I'll have more seperate concerns for each one down the road

// swipe right
export const likeProject = project => async dispatch => {
  try {

    dispatch({ type: LIKE_PROJECT });

    let likedProject = await apiCall({
      url: `/projects/${project.id}/views?liked=true`,
      method: 'post'
    });

    dispatch({ type: LIKE_PROJECT_SUCCESS, payload: likedProject });

  } catch (err) {

    dispatch({
      type: LIKE_PROJECT_FAIL,
      error: err.message
    });

    throw new Error(err.message);
  }
}

// swipe left
export const rejectProject = project => async dispatch => {
  try {

    dispatch({ type: REJECT_PROJECT });

    await apiCall({
      url: `/projects/${project.id}/views?liked=false`,
      method: 'post'
    });

    dispatch({ type: REJECT_PROJECT_SUCCESS, payload: project });

  } catch (err) {

    dispatch({
      type: REJECT_PROJECT_FAIL,
      error: err.message
    });

    throw new Error(err.message);

  }
}