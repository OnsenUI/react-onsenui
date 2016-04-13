import React from 'react';
import ReactDOM from 'react-dom';

class SplitterSide extends React.Component {
  render() {
    var {...props} = this.props;

    props.collapse = this.props.isCollapsed ? 'collapse' : 'false';
    props.swipeable = this.props.isSwipeable ? 'swipeable' : 'false';

    if (this.props.width) {
      props.width = this.props.width + 'px';
    }

    return (
      <ons-splitter-side {...props} >
        {this.props.children}
      </ons-splitter-side>
    );
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);

    this.node.addEventListener('postopen', this.props.onOpen);
    this.node.addEventListener('postclose', this.props.onClose);
  }

  componentWillUnmount() {
    this.node.removeEventListener('postopen', this.props.onOpen);
    this.node.removeEventListener('postclose', this.props.onClose);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOpen) {
      this.node.open();
    } else {
      this.node.close();
    }
  }
}

SplitterSide.propTypes = {
  isCollapsed: React.PropTypes.bool.isRequired,
  isSwipable: React.PropTypes.bool,
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  // value out of left, right ...
  side: React.PropTypes.string,
  width: React.PropTypes.number
};

export default SplitterSide;
