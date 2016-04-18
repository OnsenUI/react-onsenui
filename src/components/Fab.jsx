import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class Fab extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-fab';
  }
};

Fab.propTypes = {
  modifier: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  position: React.PropTypes.string,
  disabled: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default Fab;
