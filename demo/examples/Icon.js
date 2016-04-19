
import React from 'react';

import {Button, Page, Icon} from 'react-onsenui';

import MyToolbar from './MyToolbar';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.changeModifier = this.changeModifier.bind(this);
    this.state = {
      showMaterial: false,
      btnText: 'Switch to material design',
      modifier: 'defaullt',
    };
  }

  changeModifier() {
    if (this.state.showMaterial) {
      this.setState({
        showMaterial: false,
        btnText: 'Switch to material design',
        modifier: 'defaullt',
      });
    } else {
      this.setState({
        showMaterial: true,
        btnText: 'Switch to default design',
        modifier: 'material',
      });
    }
  }

  render() {
    return (
      <Page modifier={this.state.modifier}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <p> </p>
          <Button modifier={this.state.modifier} onClick={this.changeModifier} > {this.state.btnText} </Button>
          <p> modifier: {this.state.modifier} </p>
          <p> Button standard </p>
          <ons-icon
            modifier={this.state.modifier}
            icon='ion-edit, material:md-edit' size='20, material:20px' />
          <p> Button standard2</p>
          <Icon
            modifier={this.state.modifier}
            size={{
              default: 20,
              material: 18
            }}
            icon={{
              default: 'ion-edit',
              material: 'md-edit'
            }}/>
        </div>
      </Page>
    );
  }
}
