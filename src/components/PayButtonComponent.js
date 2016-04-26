'use strict';

import React from 'react';
import classnames from 'classnames';
require('styles/PayButton.css');

class PayButtonComponent extends React.Component {

  render() {
    let classes = classnames('paybutton-component', {'paybutton-active': this.props.active}, {'paybutton-inactive': !this.props.active});
    return (
      <button className={classes} onClick={() => this.handleClick()}>
        确认支付
      </button>
    );
  }

  handleClick() {
    if(this.props.active) {
      this.props.actions.clickPay();
    }
  }

}

// Uncomment properties you need
// PayButtonComponent.propTypes = {};
// PayButtonComponent.defaultProps = {};

export default PayButtonComponent;
