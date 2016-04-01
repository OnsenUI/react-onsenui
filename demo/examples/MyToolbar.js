import React from 'react';

import {Toolbar, BackButton} from 'react-onsenui';

export default class extends React.Component {
  render() {
    return(
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">{this.props.title}</div>
      </Toolbar>
    )
  }
}
