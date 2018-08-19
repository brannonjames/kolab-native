import {
  CREATE_PROJECT,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {

    case CREATE_PROJECT:
      return { error: null, isLoading: true };

    case CREATE_PROJECT_SUCCESS:
      return initialState;

    case CREATE_PROJECT_FAIL:
      return { error: action.error, isLoading: false }; 

    default:
      return state;
  }
}