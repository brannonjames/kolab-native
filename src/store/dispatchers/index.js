import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import swipe from './swipe';
import projects from './projects';
import chat from './chat';
import projectForm from './projectForm';
import splash from './splash';
import camera from './camera';

export default combineReducers({
  auth,
  user,
  swipe,
  projects,
  chat,
  projectForm,
  splash,
  camera
});