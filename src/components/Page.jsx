import React from 'react';
import ReactDOM from 'react-dom';
import reactUtil from './reactUtil.jsx';
import BasicComponent from './BasicComponent.jsx';
/**
 * @original ons-page
 * @category page
 * @description
 * [en] This component is handling the entire page.  THe content can be scrolled. [/en]
 * [jp] どうしよう[/jp]
 * @example
  <Page>
    <div> Page content </div>
  </Page>
 */
class Page extends BasicComponent {

  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    CustomElements.upgrade(node);
    node.addEventListener('init', this.props.onInit);
    node.addEventListener('show', this.props.onShow);
    node.addEventListener('hide', this.props.onHide);
    node.addEventListener('destroy', this.props.onDestroy);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('init', this.props.onInit);
    node.removeEventListener('show', this.props.onShow);
    node.removeEventListener('hide', this.props.onHide);
    node.removeEventListener('destroy', this.props.onDestroy);
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
  // #<{(|*
  //   * The children is provided for all components in React. These children define
  // |)}>#
  // children: React.PropTypes.node,
  // #<{(|*
  //   * The ref attribute is provided for all components in React. The attribute is callback will be executed immediately after the component is mounted.
  // |)}>#
  // ref: React.PropTypes.func,
  // #<{(|*
  //   * The style attribute is provided for all components in React. The attribute is an object. For reference look at https://facebook.github.io/react/tips/inline-styles.html.
  // |)}>#
  // style: React.PropTypes.object,
  // #<{(|*
  //   * The className attribute is provided for all components in React. It defines the classes for a component.  For reference look at https://facebook.github.io/react/tips/inline-styles.html.
  // |)}>#
  // className: React.PropTypes.string,
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  modifier: React.PropTypes.string,

  /**
   * @name onInit
   * @type function
   * @required false
   * @description
   *  [en]
   *  	Fired right after the page is attached.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  onInit: React.PropTypes.func,

  /**
   * @name onShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called Fired right after the page is shown.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  onShow: React.PropTypes.func,

  /**
   * @name onHide
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called after the page is hidden.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  onHide: React.PropTypes.func,

  /**
   * @name onDestroy
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called after the page is destroyed.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  onDestroy: React.PropTypes.func
};

export default Page;
