import React from 'react';

import MyToolbar from './MyToolbar';
import ons from '../../OnsenUI/build/js/onsenui.js';

import {
  Page,
  BackButton,
  ListItem,
  LazyList,
  Toolbar
} from 'react-onsenui';

export default class extends React.Component {

  renderRow(index) {
    return (
      <ListItem key={index}>
        {'Item ' + (index + 1)}
      </ListItem>
    );
  }

  render() {
    return (
      <Page renderToolbar={() => <MyToolbar title='LazyList' />} >
        <div style={{height: 100}}>
          <LazyList
            length={1000}
            renderRow={this.renderRow}
            calculateItemHeight={() => ons.platform.isAndroid() ? 76 : 45}
          />
        </div>
      </Page>
    );
  }
}

