import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';
/**
 * @original ons-page
 * @category page
 * @tutorial react/Reference/page
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
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('init', this.props.onInit);
    node.removeEventListener('show', this.props.onShow);
    node.removeEventListener('hide', this.props.onHide);
  }

  render() {
    const toolbar = this.props.renderToolbar(this);
    const bottomToolbar = this.props.renderBottomToolbar(this);

    const modal = this.props.renderModal(this);

    return <ons-page {...this.props} >
        {toolbar}
        <div className='page__background'> </div>
        <div className='page__content'>
          {this.props.children}
        </div>
        <div className='page__extra' style={{zIndex: 10001}}>
          {modal}
        </div>
        {bottomToolbar}
      </ons-page>;
  }
};

Page.propTypes = {
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
   * @name renderModal
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders a modal that masks current screen.[/en]
   */
  renderModal: React.PropTypes.func,

  /**
   * @name renderToolbar
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders the toolbar of the page.[/en]
   *  [jp] どうしよう[/jp]
   */
  renderToolbar: React.PropTypes.func,

  /**
   * @name renderBottomToolbar
   * @type function
   * @defaultValue null
   * @description
   *  [en] This function renders the bottom toolbar of the page.[/en]
   *  [jp] どうしよう[/jp]
   */
  renderBottomToolbar: React.PropTypes.func,

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
  onHide: React.PropTypes.func
};

const NOOP = () => null;

Page.defaultProps = {
  renderToolbar: NOOP,
  renderBottomToolbar: NOOP,
  renderModal: NOOP
};

export default Page;
