import { combineReducers } from 'redux';

import {
  LOAD_USER_PROJECTS,
  LOAD_USER_PROJECTS_SUCCESS,
  LOAD_USER_PROJECTS_FAIL,
  LIKE_PROJECT_SUCCESS,

  SET_CURRENT_PROJECT,

  LOAD_PROJECTS_CREATED,
  LOAD_PROJECTS_CREATED_SUCCESS,
  LOAD_PROJECTS_CREATED_FAIL,

  CREATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS

} from '../actions/types';

const projectsState = {
  all: [],
  isLoading: false,
  error: false
}

const currentProjectState = {
  project: null,
  isLoading: false,
  error: null
}


const collaborating = (state=projectsState, action) => {
  switch(action.type) {

    case LOAD_USER_PROJECTS:
      return { ...state, isLoading: true  }
    case LOAD_USER_PROJECTS_SUCCESS:
      return { ...state, all: action.payload, isLoading: false, error: null }
    case LOAD_USER_PROJECTS_FAIL:
      return { ...initialState, error: action.error }
    
    case LIKE_PROJECT_SUCCESS:
      return { ...state, all: [action.payload, ...state.all] }

    case UPDATE_PROJECT_SUCCESS:
      return { 
        ...state, 
        all: state.all.map(p => p.id === action.payload.id ? action.payload : p) 
      } 
      
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(p => p.id !== action.payload.id)
      }

    default:
      return state;
  }
}

const created = (state=projectsState, action) => {
  switch(action.type) {

    case LOAD_PROJECTS_CREATED:
      return { ...state, error: null, isLoading: true }
    case LOAD_PROJECTS_CREATED_SUCCESS:
      return { all: [...action.payload], isLoading: false, error: null }
    case LOAD_PROJECTS_CREATED_FAIL:
      return { ...state, isLoading: false, error: action.error }  

    case CREATE_PROJECT_SUCCESS:
      return { ...state, all: [...state.all, action.payload] } 

    case UPDATE_PROJECT_SUCCESS:
      return { 
        ...state, 
        all: state.all.map(p => p.id === action.payload.id ? action.payload : p) 
      }  
      
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(p => p.id !== action.payload.id)
    }  
      
    default:
      return state
  }
}

const current = (state=currentProjectState, action) => {
  switch(action.type) {

    case SET_CURRENT_PROJECT:
      return { ...state, project: action.payload }

    default:
      return state;
  }
}

export default combineReducers({
  created,
  collaborating,
  current
});