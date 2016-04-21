import React from 'react';
import ReactDOM from 'react-dom';

import ons from '../OnsenUI/build/js/onsenui.js';

import {
  Page,
  Navigator,
  Toolbar,
  List,
  ListItem,
  SpeedDial,
  SpeedDialItem,
  Ripple,
  Icon
} from 'react-onsenui';

import PageExample from './examples/Page';
import ListExample from './examples/List';
import LazyListExample from './examples/LazyList';
import TabbarExample from './examples/Tabbar';
import AlertDialogExample from './examples/AlertDialog';
import SplitterExample from './examples/Splitter';
import InputExample from './examples/Input';
import IconExample from './examples/Icon';
import RippleExample from './examples/Ripple';
import SpeedDialExample from './examples/SpeedDial';

class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {class: 'test'};

    this.examples = [
      {
        title: 'SpeedDial',
        component: SpeedDialExample
      },
      {
        title: 'Page',
        component: PageExample
      },
      {
        title: 'Ripple',
        component: RippleExample
      },

      {
        title: 'Icon',
        component: IconExample
      },
      {
        title: 'List',
        component: ListExample
      },
      {
        title: 'Lazy List',
        component: LazyListExample
      },
      {
        title: 'Tabbar',
        component: TabbarExample
      },
      {
        title: 'Alert dialog',
        component: AlertDialogExample
      },
      {
        title: 'Splitter',
        component: SplitterExample
      },
      {
        title: 'Input',
        component: InputExample
      }];

      // setTimeout(() => {
      //   this.goto(this.examples[0]);
      // }, 0);
  }

  goto(example) {
    this.props.navigator.pushPage({
      component: example.component,
      props: {
        key: example.title
      }
    });
  }

  render() {
    return (
      <Page style={{background: 'green'}}
        renderToolbar={() => <Toolbar> <div className="center"> Up Toolbar </div> </Toolbar>}
        >


        <List
          dataSource={this.examples}
          renderHeader={ () =>
            <ListItem lockOnDrag  style={{background: 'green'}} tappable tap-background-color='red'> HEADER </ListItem>
          }
          renderRow={(example) => (
            <ListItem key={example.title} onClick={this.goto.bind(this, example)}>{example.title}</ListItem>
          )}
        />
      </Page>
    );
  }
}

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Navigator
        renderPage={this.renderPage}
        initialRoute={{
          component: Examples,
          props: {
            key: 'examples'
          }
        }}
      />
    );
  }
}


class MyPage extends React.Component {

    constructor(props) {
        super(props);
        console.log('Page Constructor called');
    }

    render() {
        console.log('Page Render called');
        return (
            <Page>
                <TestComponent/>
            </Page>
        );
    }
}

export default class TestComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Test Constructor called');
    }

    render() {
        console.log('Test render called');
        return (
            <p>test</p>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
