import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  componentDidUpdate() {
    this.node._compile();
  }

  render() {
    return (
      <ons-list-item {...this.props}>
        {this.props.children}
      </ons-list-item>
    );
  }
};
