import {
  CREATE_PROJECT,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,

  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,

  CLEAR_PROJECT_FORM_ERROR
  
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {

    case CREATE_PROJECT:
    case UPDATE_PROJECT:
      return { error: null, isLoading: true };

    case UPDATE_PROJECT_SUCCESS:  
    case CREATE_PROJECT_SUCCESS:
      return initialState;

    case UPDATE_PROJECT_FAIL:  
    case CREATE_PROJECT_FAIL:
      return { error: action.error, isLoading: false }; 

    case CLEAR_PROJECT_FORM_ERROR:
      return { ...state, error: null }   


    default:
      return state;
  }
}