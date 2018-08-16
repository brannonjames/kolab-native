import io from 'socket.io-client';
import { SecureStore } from 'expo';

import {
  ESTABLISH_SOCKET_CONNECTION,
  ESTABLISH_SOCKET_CONNECTION_SUCCESS,
  ESTABLISH_SOCKET_CONNECTION_FAIL,

  LOAD_INITIAL_MESSAGES,
  LOAD_INITIAL_MESSAGES_SUCCESS,
  LOAD_INITIAL_MESSAGES_FAIL

} from './types';

export const openChatSocket = projectId => async dispatch => {
  try {

    dispatch({ type: ESTABLISH_SOCKET_CONNECTION });
    let token = await SecureStore.getItemAsync('token');

    const socket = io('http://localhost:3060', {
      query: {
        auth_token: token,
        project_id: projectId
      }
    });

    await new Promise((resolve, reject) => {

      socket.emit('subscribe', { room: projectId });

      socket.on('subscribe_successful', () => {
        dispatch({ type: ESTABLISH_SOCKET_CONNECTION_SUCCESS, payload: socket });
        resolve();
      });

      socket.on('subscribe_failure', () => {
        socket.removeAllListeners();
        dispatch({ type: ESTABLISH_SOCKET_CONNECTION_FAIL });
        reject('connection refused');
      });


    })

    

  } catch (err) {
    throw Error(err.message);
  }
}

export const loadInitialMessages = () => async (dispatch, getState) => {
  try {

    dispatch({ type: LOAD_INITIAL_MESSAGES });

    const { chat } = getState();
    const { socket } = chat;

    console.log(chat);
    if (socket) {

      await new Promise((resolve, reject) => {

        socket.emit('load_initial_messages');

        socket.on('load_initial_messages_success', messages => {
          console.log(messages);
          dispatch({ type: LOAD_INITIAL_MESSAGES_SUCCESS, payload: messages });
          resolve();
        });
  
        socket.on('load_initial_messages_fail', error => {
          dispatch({ type: LOAD_INITIAL_MESSAGES_FAIL, error });
          reject();
        });

      })
      
    } else {
      dispatch({ type: LOAD_INITIAL_MESSAGES_FAIL, error: 'Couldn\'t establish connection' });
    }

  } catch (err) {
    dispatch({ type: LOAD_INITIAL_MESSAGES_FAIL, error: err.message });
  }
}