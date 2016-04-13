import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';

const EVENT_TYPES = ['change', 'input'];

class Input extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);

    EVENT_TYPES.forEach((eventType) => {
      node.addEventListener(eventType, this.props.onChange);
    });
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);

    EVENT_TYPES.forEach((eventType) => {
      node.removeEventListener(eventType, this.props.onChange);
    });
  }

  render() {
    var {checked, ...other} = this.props;

    return (
      <ons-input checked={checked ? '' : null} {...other} />
    );
  }
}

Input.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
};

export default Input;
