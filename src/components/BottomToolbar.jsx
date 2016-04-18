import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class BottomToolbar extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-buttom-toolbar';
  }
};

BottomToolbar.propTypes = {
  modifier: React.PropTypes.string
};

export default BottomToolbar;
