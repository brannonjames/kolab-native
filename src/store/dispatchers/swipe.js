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

    // whether the user swipes left or right, the card will be removed from the stack
    case LIKE_PROJECT_SUCCESS:
    case REJECT_PROJECT_SUCCESS:
      console.log(action.payload);
      const projects = state.projects.filter(project => project.id !== action.payload.id);
      return { ...this.state, projects }

    default:
      return state;     
  }
}