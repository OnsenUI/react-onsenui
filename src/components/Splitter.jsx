import React from 'react';

class Splitter extends React.Component {
  render() {
    return (
      <ons-splitter>
        {this.props.children}
      </ons-splitter>
    );
  }
}

class SplitterSide extends React.Component {
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

class SplitterContent extends React.Component {
  render() {
    var props = Object.assign({}, this.props);

    return (
      <ons-splitter-content {...props} >
        {this.props.children}
      </ons-splitter-content>

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

export {Splitter, SplitterSide, SplitterContent};
