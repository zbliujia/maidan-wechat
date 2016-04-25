require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Keyboard from './Keyboard';
import Info from './Info';

class App extends React.Component {
  render() {
    return (
      <div>
        <Info />
        <Keyboard />
      </div>
    );
  }
}

export default App;
