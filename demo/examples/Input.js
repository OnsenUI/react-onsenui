import React from 'react';

import {
  Page,
  List,
  ListItem,
  Toolbar,
  ToolbarButton,
  BackButton,
  Button,
  Input
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3, 4, 5, 6]
    };
  }

  reverseData() {
    this.setState({
      data: this.state.data.reverse()
    });
  }

  remove(idx) {
    const data = this.state.data;
    data.splice(idx, 1);

    this.setState({
      data: data
    });
  }

  add() {
    const data = this.state.data;
    data.push(data.length);

    this.setState({
      data: data,
      text: ''
    });
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">List</div>
          <div className="right">
            <ToolbarButton >FLIP</ToolbarButton>
          </div>
        </Toolbar>
        <div> Please enter a text </div>
        <p>
          <Input value={this.state.text} onChange={(text) => this.setState({text: text}) } modifier='material' float placeholder="Username"
            ></Input>
          <div> Text : {this.state.text} </div>
        </p>
      </Page>
    );
  }
}
