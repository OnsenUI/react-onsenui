import React from 'react';
import {
  Page,
  Modal,
  Button,
  BackButton,
  Toolbar,
  ToolbarButton,
  Icon
} from '../../src/index.js';

const MyToolbar = ({ title = '', leftButton }) => (
  <Toolbar>
    {leftButton &&
      <div className='left'>
        {leftButton}
      </div>
    }
    <div className='center'>
      {title}
    </div>
  </Toolbar>
);

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  renderModalToolbar() {
    return (
      <MyToolbar
        title='This is a modal page.'
        leftButton={(
          <ToolbarButton onClick={() => this.setState({ showModal: false })}>
            <Icon
              size={{default: 24, material: 40}}
              icon={{default: 'ion-close', material: 'md-close'}}
            />
          </ToolbarButton>
        )}
      />
    );
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.showModal}
        animation='fade'
      >
        <Page renderToolbar={this.renderModalToolbar.bind(this)}>
          <p>
            I'm a modal page.
          </p>
        </Page>
      </Modal>
    );
  }

  render() {
    return (
      <Page
        renderModal={this.renderModal.bind(this)}
        renderToolbar={() => (
          <MyToolbar
            title='Page'
            leftButton={<BackButton modifier={this.props.modifier}>Back</BackButton>}
          />
        )}
      >
        <section style={{ padding: 15 }}>
          <Button onClick={() => this.setState({ showModal: true })}>
            Open Modal
          </Button>
        </section>
      </Page>
    );
  }
}
