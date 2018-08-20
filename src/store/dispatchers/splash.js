import {
  INITIALIZE_APP,
  INITIALIZE_APP_SUCCESS,
  INITIALIZE_APP_FAIL
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case INITIALIZE_APP:
      return { isLoading: true, error: null };
    case INITIALIZE_APP_SUCCESS:
      return initialState;
    case INITIALIZE_APP_FAIL:
      return { isLoading: false, error: action.error }    
    default:
      return state;
  }
}

