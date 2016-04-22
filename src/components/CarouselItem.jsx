import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class CarouselItem extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-carousel-item';
  }
};

CarouselItem.propTypes = {
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

export default CarouselItem;
