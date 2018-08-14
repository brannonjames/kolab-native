import {
  LOAD_SWIPE_PROJECTS,
  LOAD_SWIPE_PROJECTS_SUCCESS,
  LOAD_SWIPE_PROJECTS_FAIL
} from '../actions/types';

const initialState = {
  projects: [],
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_SWIPE_PROJECTS:
      return { projects: [], isLoading: true }
    case LOAD_SWIPE_PROJECTS_SUCCESS:
      return { projects: action.payload, isLoading: false, error: null  } 
    case LOAD_SWIPE_PROJECTS_FAIL:
      return { projects: [], isLoading: false, error: action.error }
    default:
      return state;     
  }
}