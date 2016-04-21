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

  render() {
    var {lockOnDrag, tapBackgroundColor, tappable, ...others} = this.props;

    if (tappable) {
      others.tappable = true;
    }

    if (tapBackgroundColor) {
      others['tap-background-color'] = tapBackgroundColor;
    }

    if (lockOnDrag) {
      others['lock-on-drag'] = lockOnDrag;
    }

    return React.createElement(this._getDomNodeName(), others, this.props.children);
  }
};

ListItem.propTypes = {
  modifier: React.PropTypes.string,
  tappable: React.PropTypes.bool,
  tapBackgroundColor: React.PropTypes.string,
  lockOnDrag: React.PropTypes.bool
};

export default ListItem;
