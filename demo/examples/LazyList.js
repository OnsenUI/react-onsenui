import React from 'react';

import {
  Page,
  ListItem,
  LazyList,
  Toolbar
} from 'react-onsenui';

export default class extends React.Component {

  renderRow(index) {
    return <ListItem key={index}>
      {'Item ' + (index + 1)}
    </ListItem>;
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className='center'>Lazy Repeat</div>
        </Toolbar>

        <div style={{height: 100}}>
          <LazyList
            length={1000}
            renderRow={this.renderRow}
            calculateItemHeight={() => 44}
          />
        </div>
      </Page>
    );
  }
}

