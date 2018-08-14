import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/root';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import dispatchers from './src/store/dispatchers';

const store = createStore(dispatchers, {}, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
