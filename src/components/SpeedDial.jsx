import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class SpeedDial extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-speed-dial';
  }
};

SpeedDial.propTypes = {
  modifier: React.PropTypes.string,
  position: React.PropTypes.string,
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  disabled: React.PropTypes.bool
};

export default SpeedDial;
