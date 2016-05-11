import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-bottom-toolbar
 * @category toolbar
 * @description
 * [en] Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically.  [/en]
 * [jp][/jp]
 * @example
 *<BottomToolbar modifier="material"> Content </BottomToolbar>
 */
class BottomToolbar extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-bottom-toolbar';
  }
};

BottomToolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [jp][/jp]
   */
  modifier: React.PropTypes.string
};

export default BottomToolbar;
