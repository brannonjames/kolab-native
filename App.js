import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/root';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import dispatchers from './src/store/dispatchers';
import firebase from 'firebase';

const store = createStore(dispatchers, {}, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyC3iHyXPYzs5mdWj-phj4wJ069VeNg4-Bo",
      authDomain: "kolab-72641.firebaseapp.com",
      databaseURL: "https://kolab-72641.firebaseio.com",
      projectId: "kolab-72641",
      storageBucket: "kolab-72641.appspot.com",
      messagingSenderId: "1037484276850"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
