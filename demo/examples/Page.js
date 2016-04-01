import React from 'react';

import {Page} from 'react-onsenui';

import MyToolbar from './MyToolbar';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: 'material'
    };
  }

  toggleModifier() {
    this.setState({
      modifier: this.state.modifier === 'material' ? '' : 'material'
    });
  }

  render() {
    return (
      <Page lmodifier={this.state.modifier}>
        <MyToolbar title="Page" />

        <p>
          This is a page!
        </p>
        <p>
          <button onClick={this.toggleModifier.bind(this)}>Switch modifier</button>
        </p>
      </Page>
    );
  }
}
