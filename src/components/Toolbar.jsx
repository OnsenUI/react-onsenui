import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * I'm a toolbar!
 */
class Toolbar extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-toolbar';
  }
};

Toolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  modifier: React.PropTypes.string
};

export default Toolbar;
