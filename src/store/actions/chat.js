import io from 'socket.io-client';
import { SecureStore } from 'expo';

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

} from './types';

export const openChatSocket = projectId => async dispatch => {
  try { 

    dispatch({ type: ESTABLISH_SOCKET_CONNECTION });

    let token = await SecureStore.getItemAsync('token'); 

    const socket = io('https://kolab-api.herokuapp.com/', {
    // const socket = io('http://localhost:3060/', {
      query: {
        auth_token: token,
        project_id: projectId
      }
    });

    await new Promise((resolve, reject) => {
      socket.emit('subscribe', { room: projectId });

      socket.on('subscribe_successful', () => {
        dispatch({ type: ESTABLISH_SOCKET_CONNECTION_SUCCESS, payload: socket });
        initializeSocketListeners(dispatch, socket);
        resolve();
      });
  
      socket.on('subscribe_failure', () => {
        socket.removeAllListeners();
        dispatch({ type: ESTABLISH_SOCKET_CONNECTION_FAIL });
        reject('connection refused');
      });
    })

  } catch (err) {
      dispatch({ type: ESTABLISH_SOCKET_CONNECTION_FAIL });
      throw new Error('Authentication Error');
  }
}

export const loadInitialMessages = () => async (dispatch, getState) => {

  dispatch({ type: LOAD_INITIAL_MESSAGES });

  const { socket } = getState().chat;

  if (socket) {
    socket.emit('load_initial_messages');
  }
}

export const sendMessage = message => async (dispatch, getState) => {

  dispatch({ type: SEND_MESSAGE });

  const { socket } = getState().chat;

  if (socket) {
    socket.emit('send_message', message);
  }
}

const initializeSocketListeners = (dispatch, socket) => {

  socket.on('load_initial_messages_success', messages => {
    dispatch({ type: LOAD_INITIAL_MESSAGES_SUCCESS, payload: messages });
  });

  socket.on('load_initial_messages_fail', error => {
    dispatch({ type: LOAD_INITIAL_MESSAGES_FAIL, error: error });
  });

  socket.on('send_message_success', message => {
    dispatch({ type: SEND_MESSAGE_SUCCESS, payload: message });
  });

  socket.on('send_message_fail', error => {
    error.messageId = message.id;
    dispatch({ type: SEND_MESSAGE_FAIL, error });
  });

}