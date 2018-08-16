import {
  ESTABLISH_SOCKET_CONNECTION,
  ESTABLISH_SOCKET_CONNECTION_SUCCESS,
  ESTABLISH_SOCKET_CONNECTION_FAIL,

  LOAD_INITIAL_MESSAGES,
  LOAD_INITIAL_MESSAGES_SUCCESS,
  LOAD_INITIAL_MESSAGES_FAIL
} from '../actions/types';

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
  socket: null
}

export default (state=initialState, action) => {
  switch(action.type) {

    case LOAD_INITIAL_MESSAGES:
      return { ...state, isLoading: true }

    case ESTABLISH_SOCKET_CONNECTION:
      return { ...initialState, isLoading: true };

    case ESTABLISH_SOCKET_CONNECTION_SUCCESS:
      return {...initialState, socket: action.payload };

    case LOAD_INITIAL_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload }  

    case LOAD_INITIAL_MESSAGES_FAIL:  
    case ESTABLISH_SOCKET_CONNECTION_FAIL:
      return { ...initialState, error: action.error }  
    default:
      return state;    
  }
}