import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/root';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import dispatchers from './src/store/dispatchers';

const store = createStore(dispatchers, {}, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
