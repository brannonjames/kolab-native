import {
  LOAD_USER_PROJECTS,
  LOAD_USER_PROJECTS_SUCCESS,
  LOAD_USER_PROJECTS_FAIL,
  LIKE_PROJECT_SUCCESS,
  SET_CURRENT_PROJECT
} from '../actions/types';

const initialState = {
  all: [],
  isLoading: false,
  error: null ,
  current: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_USER_PROJECTS:
      return { ...initialState, isLoading: true  }
    case LOAD_USER_PROJECTS_SUCCESS:
      return { all: action.payload, isLoading: false, error: null }
    case LOAD_USER_PROJECTS_FAIL:
      return { ...initialState, error: action.error }
    
    case LIKE_PROJECT_SUCCESS:
      return { ...initialState, all: [action.payload, ...state.all] }

    case SET_CURRENT_PROJECT:
      return { ...state, current: action.payload }
     
    default:
      return state;
  }
}