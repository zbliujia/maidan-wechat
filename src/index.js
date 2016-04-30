import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import PayOver from './containers/PayOver';

const store = configureStore({Keyboard:[],Busy:false});
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/PayOver" component={PayOver}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
