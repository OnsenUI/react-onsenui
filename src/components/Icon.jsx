import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class Icon extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-icon';
  }
};

Icon.propTypes = {
  /**
   * @name icon
   * @type string
   */
  modifier: React.PropTypes.string,
  size: React.PropTypes.string,
  rotate: React.PropTypes.number,
  flip: React.PropTypes.string,
  fixedWidth: React.PropTypes.bool,
  spin: React.PropTypes.string
};

export default Icon;
