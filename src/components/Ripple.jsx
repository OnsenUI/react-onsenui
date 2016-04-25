import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-ripple
 * @category form
 * @description
 * [en] Adds a Material Design "ripple" effect to an element.  [/en]
 * [jp] どうしよう[/jp]
 * @example
   <div className='myList'>
     <Ripple color='red' />
   </div>
 */
class Ripple extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-ripple';
  }
};

Ripple.propTypes = {
  color: React.PropTypes.string,
  background: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

export default Ripple;
