import React from 'react';

import {
  Page,
  List,
  ListItem,
  Toolbar,
  ToolbarButton,
  BackButton
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3, 4, 5, 6]
    };
  }

  reverseData() {
    this.setState({data: this.state.data.reverse()});
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">List</div>
          <div className="right">
            <ToolbarButton onClick={this.reverseData.bind(this)}>FLIP</ToolbarButton>
          </div>
        </Toolbar>

        <List
          dataSource={this.state.data}
          renderRow={(row) => <ListItem key={row}>
            {row}
          </ListItem>}
        />
      </Page>
    );
  }
}
