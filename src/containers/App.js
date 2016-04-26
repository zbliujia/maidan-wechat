require('styles/App.css');

import React from 'react';
import Keyboard from './Keyboard';
import Info from './Info';

class App extends React.Component {
  render() {
    return (
      <div className='main-content'>
        <div className='info-content'>
          <Info />
        </div>
        <div className='keyboard-content'>
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
