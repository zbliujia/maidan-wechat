'use strict';

import React, { Component, PropTypes } from 'react';

require('styles/KeyboardButton.css');

class KeyboardButtonComponent extends Component {

  render() {
    return (
      <button onClick={() => this.handleClick()}>{this.props.text}</button>
    );
  }

  handleClick() {
    this.props.click(this.props.text);
  }

}

KeyboardButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default KeyboardButtonComponent;
