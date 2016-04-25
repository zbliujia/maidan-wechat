'use strict';

import React, { Component, PropTypes } from 'react';

require('styles/InfoMoney.css');

class InfoMoneyComponent extends Component {
  render() {
    return (
      <div className="infomoney-component" >
        {this.props.text}
      </div>
    );
  }
}

InfoMoneyComponent.propTypes = {
  text: PropTypes.string.isRequired
};

InfoMoneyComponent.defaultProps = {
  text: ''
};

export default InfoMoneyComponent;
