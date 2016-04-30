import React, {
  Component
} from 'react';

import Loading from 'react-loading';

class Busy extends Component {
  render() {
    return (
      <Loading type='spin' color='#e3e3e3' />
    );
  }
}

export default Busy;
