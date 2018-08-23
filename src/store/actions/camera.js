import apiCall from '../../services/apiCall';
import { ImageManipulator } from 'expo';
import firebase from 'firebase';

import {
  SAVE_AVATAR,
  SAVE_AVATAR_SUCCESS,
  SAVE_AVATAR_FAIL
} from './types'

export const saveAvatar = uri => async (dispatch, getState) => {
  try {

    // console.log(firebase.app.length);
    // console.log(uri, 'uri');

    dispatch({ type: SAVE_AVATAR });

    const filename = `${getState().user.username}-${Date.now()}.jpg`;

    const imageRef = firebase
      .storage()
      .ref()
      .child(`avatars/${filename}`)

    let sized = await ImageManipulator.manipulate(uri,
      [{ resize: { width: 400 }}]
    );

    let response = await fetch(sized.uri);
    let blog = await response.blob();

    await imageRef.put(blog);
    const url = await imageRef.getDownloadURL();
    console.log(url);
    let user = await apiCall({
      url: '/users/avatar',
      method: 'post',
      data: {
        avatar_url: url
      } 
    });

    console.log(user);

    dispatch({ type: SAVE_AVATAR_SUCCESS, payload: user });
    

  } catch (err) {

    console.log(err);
    dispatch({ type: SAVE_AVATAR_FAIL, error: 'Oops an error occured' });
    return null;

  }
}