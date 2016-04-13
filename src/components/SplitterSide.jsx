import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class SplitterSide extends BasicComponent {
  render() {
    var props = Object.assign({}, this.props);

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
}

SplitterSide.propTypes = {
  isCollapsed: React.PropTypes.bool.isRequired,
  isSwipable: React.PropTypes.bool,
  // value out of left, right ...
  side: React.PropTypes.string,
  width: React.PropTypes.number
};

export default SplitterSide;
