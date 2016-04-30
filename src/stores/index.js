const redux = require('redux');
const reducers = require('../reducers');
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

module.exports = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory), createLogger())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    })
  }

  return store;
};
