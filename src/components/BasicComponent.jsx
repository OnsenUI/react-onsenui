import React from 'react';
import ReactDOM from 'react-dom';

class BasicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateClasses = this.updateClasses.bind(this);
  }

  updateClasses() {
    var node = ReactDOM.findDOMNode(this);

    if (typeof this.props.className !== 'undefined') {
      if (this.lastClass) {
        node.className = node.className.replace(this.lastClass, ' ');
      }

      this.lastClass = ' ' + this.props.className.trim();

      node.className = node.className.trim() + this.lastClass;
    }

    if (!window._superSecretOns) {
      throw new Error("react-onsenui requires `onsenui`, make sure you are loading it with `import onsenui` or `require('onsenui')` before using the components");
    }

    window._superSecretOns._autoStyle.prepare(node);
  }

  componentDidMount() {
    this.updateClasses();
  }

  componentDidUpdate() {
    this.updateClasses();
  }
}

export default BasicComponent;
