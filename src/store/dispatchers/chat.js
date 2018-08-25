import {
  ESTABLISH_SOCKET_CONNECTION,
  ESTABLISH_SOCKET_CONNECTION_SUCCESS,
  ESTABLISH_SOCKET_CONNECTION_FAIL,

  LOAD_INITIAL_MESSAGES,
  LOAD_INITIAL_MESSAGES_SUCCESS,
  LOAD_INITIAL_MESSAGES_FAIL,

  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL

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

    case SEND_MESSAGE_SUCCESS:
      return { ...state, messages: [action.payload, ...state.messages] } 

    case SEND_MESSAGE_FAIL:
      const messages = state.messages.filter(msg => msg.id !== action.error.messageId);
      return { ...state, messages };

    case ESTABLISH_SOCKET_CONNECTION:
      return { ...initialState, isLoading: true };

    case ESTABLISH_SOCKET_CONNECTION_SUCCESS:
      return {...initialState, socket: action.payload };

    case LOAD_INITIAL_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload.reverse(), isLoading: false }  

    case LOAD_INITIAL_MESSAGES_FAIL:  
    case ESTABLISH_SOCKET_CONNECTION_FAIL:
      return { ...initialState, error: action.error }  
    default:
      return state;  
  }
}