# React Components for Onsen UI

[Onsen UI](https://onsen.io) is a UI component library for hybrid mobile apps. It provides components for navigation, forms, tabs, Material Design, infinite lists and much more.

Please check out our [kitchensink example](https://github.com/OnsenUI/react-onsenui-kitchensink) to learn how to use this.

Or you can [click here](http://onsenui.github.io/react-onsenui-kitchensink/demo.html) for a quick demo.

## Using Onsen UI with npm

The easiest way to use these components is by installing them through npm and using a CommonJS module system such as browserify and webpack (the kitchensink example above is using browserify).

You need to install `react`, `react-dom`, `onsenui` and `react-onsenui`. You probably also need to add [Babel](https://babeljs.io/) with the `react` preset.

Now you can import the necessary libraries in your code:

```
var React = require('react');
var ReactDOM = require('react-dom');

require('onsenui'); // This needs to be imported to bootstrap the components.
var Ons = require('react-onsenui');

var MyPage = React.createClass({
  renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className='center'>Onsen UI</div>
      </Ons.Toolbar>
    );
  }

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <p>This is Onsen UI!</p>
      </Ons.Page>
    );
  }
});

ReactDOM.render(<MyPage />, document.getElementById('app'));
```

Take a look at the kitchensink example for more complex code.

## Articles

Here are a couple of articles about these components. They might be a bit outdated.

* [Preview of React Components for Onsen UI 2.0](https://onsen.io/blog/react-onsen-ui-preview/)
* [Navigation and Tabs in the Onsen UI React Extension](https://onsen.io/blog/react-onsen-ui-navigator-tabs/)
