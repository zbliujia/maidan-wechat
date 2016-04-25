require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Keyboard from './Keyboard';

class App extends React.Component {
  render() {
    return <Keyboard/>;
  }
}

export default App;
