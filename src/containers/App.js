require('styles/App.css');
import React from 'react';
import Keyboard from './Keyboard';
import Info from './Info';
import Pay from './Pay';
import Busy from './Busy';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
    <div className='main-content'>
      <div className='info-content'>
        <Info />
      </div>
      <div className='pay-content'>
        <Pay />
      </div>
      <div className='keyboard-content'>
        <Keyboard />
      </div>
      <div style={{display:this.props.busy?'flex':'none'}} className='busy-content'>
        <Busy />
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  const props = {
    busy:state.Busy
  };
  return props;
}

export default connect(mapStateToProps)(App);
