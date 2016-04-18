import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class Switch extends BasicComponent {

  componentDidMount() {
    super.componentDidMount();
    this.refs.switch.addEventListener('change', this.props.onChange);
  }

  componentWillUnmount() {
    this.refs.switch.removeEventListener('change', this.props.onChange);
  }

  render() {
    var {checked, inputID, ...other} = this.props;

    if (inputID) {
      other['input-id'] = inputID;
    }
    return (
      <ons-switch ref='switch' checked={checked ? '' : null} {...other} />
    );
  }
};

Switch.propTypes = {
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  inputID: React.PropTypes.string
};

export default Switch;
