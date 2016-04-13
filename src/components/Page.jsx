import React from 'react';
import ReactDOM from 'react-dom';
import reactUtil from './reactUtil.jsx';
import BasicComponent from './BasicComponent.jsx';

/**
 * Should be used as root component of each page. The content inside page component is scrollable.
*/
class Page extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    CustomElements.upgrade(node);
  }

  render() {
    var toolbar;
    var modal;
    var otherChildren = [];

    React.Children.forEach(this.props.children, (child) => {
      if (child == null) return;
      if (reactUtil.rendersToToolbar(child)) {
        toolbar = child;
      } else if (reactUtil.rendersToModal(child)) {
        modal = child;
      } else {
        otherChildren.push(child);
      }
    });

    return <ons-page {...this.props} _compiled='true' >
        {toolbar}
        <div className='page__background'> </div>
        <div className='page__content'>
          {otherChildren}
        </div>
        <div className='page__extra' style={{zIndex: 10001}}>
          {modal}
        </div>
      </ons-page>;
  }
};

Page.propTypes = {
  /**
    * The children is provided for all components in React. These children define
  */
  children: React.PropTypes.node,
  /**
    * The ref attribute is provided for all components in React. The attribute is callback will be executed immediately after the component is mounted.
  */
  ref: React.PropTypes.func,
  /**
    * The style attribute is provided for all components in React. The attribute is an object. For reference look at https://facebook.github.io/react/tips/inline-styles.html.
  */
  style: React.PropTypes.object,
  /**
    * The className attribute is provided for all components in React. It defines the classes for a component.  For reference look at https://facebook.github.io/react/tips/inline-styles.html.
  */
  className: React.PropTypes.string
};

export default Page;
