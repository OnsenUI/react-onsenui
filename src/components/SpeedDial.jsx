import React from 'react';
import ReactDOM from 'react-dom';
import reactUtil from './reactUtil.jsx';

var SpeedDial = React.createClass({
  render: function() {
    return(
      <ons-speed-dial {...this.props}>
        {this.props.children}
      </ons-speed-dial>
    );
  }
});

export default SpeedDial;
