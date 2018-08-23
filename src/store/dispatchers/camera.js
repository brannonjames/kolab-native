import {
  SAVE_AVATAR,
  SAVE_AVATAR_SUCCESS,
  SAVE_AVATAR_FAIL
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SAVE_AVATAR:
      return { isLoading: true, error: null }
    case SAVE_AVATAR_SUCCESS:
      return { isLoading: false, error: null }
    case SAVE_AVATAR_FAIL: 
      return { isLoading: false, error: action.error } 
    default:
      return state;  
  }  
}