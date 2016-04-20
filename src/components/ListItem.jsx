import ReactDOM from 'react-dom';
import React from 'react';
import SimpleWrapper from './SimpleWrapper.jsx';

class ListItem extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-list-item';
  }

  componentDidMount() {
    super.componentDidMount();
    this.node = ReactDOM.findDOMNode(this);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.node._compile();
  }
};

ListItem.propTypes = {
  modifier: React.PropTypes.string
};

export default ListItem;
