import React from 'react';

class Switch extends React.Component {

  componentDidMount() {
    this.refs.switch.addEventListener('change', this.props.onChange);
  }

  componentWillUnmount() {
    this.refs.switch.removeEventListener('change', this.props.onChange);
  }

  render() {
    var {checked, ...other} = this.props;

    return (
      <ons-switch ref="switch" checked={checked ? '' : null} {...other} />
    );
  }
};

Switch.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  checked: React.PropTypes.bool.isRequired
};

export default Switch;
