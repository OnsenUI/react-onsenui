import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-back-button
 * @category page
 * @description
 * [en] Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically.  [/en]
 * [jp][/jp]
 * @example
 * <Toolbar modifier={this.props.modifier} >
      <div className="left"><BackButton modifier={this.props.modifier}>Back</BackButton></div>
      <div className="center">{this.props.title}</div>
   </Toolbar>
 */
class BackButton extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-back-button';
  }
};

BackButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [jp] [/jp]
   */
  modifier: React.PropTypes.string
};

export default BackButton;
