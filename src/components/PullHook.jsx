import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';
import React from 'react';

/**
 * @original ons-pull-hook
 * @category pull-hook
 * @description
 * [en]  Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
 *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
 [/en]
 * [jp] どうしよう[/jp]
 * @example

    return (
      <PullHook onChange={this.onChange} onLoad={this.onLoad}>
      {
       (this.state.pullHookState === 'initial') ?
        <span >
          <Icon size={35} spin={false} icon='ion-arrow-down-a' />
          Pull down to refresh
        </span> :
        (this.state.pullHookState === 'preaction') ?
         <span>
           <Icon size={35} spin={false} icon='ion-arrow-up-a' />
           Release to refresh
        </span>
        :
        <span><Icon size={35} spin={true} icon='ion-load-d'></Icon> Loading data...</span>
    }
      </PullHook>
    );
 */
class PullHook extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    node.addEventListener('changestate', this.props.onChange);
    CustomElements.upgrade(this.refs.pullHook);
    this.refs.pullHook.setActionCallback(this.props.onLoad);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('changestate', this.props.onChange);
  }

  render() {
    var {disabled, thresholdHeight, fixedContent, height, ...others} = this.props;

    if (disabled) {
      others.disabled = true;
    }

    if (height) {
      others.height = `${height}px`;
    }

    if (thresholdHeight) {
      others['threshold-height'] = `${thresholdHeight}px`;
    }

    if (fixedContent) {
      others['fixed-content'] = true;
    }

    return <ons-pull-hook ref='pullHook' {...others} />;
  }
}

PullHook.propTypes = {
  /**
   * @name onChange
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook inner state is changed. The state can be either "initial", "preaction" or "action"[/en]
   *  [jp] [/jp]
   */
  onChange: React.PropTypes.func,

  /**
   * @name onLoad
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook is in the  `action` state[/en]
   *  [jp] [/jp]
   */
  onLoad: React.PropTypes.func,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] When set to true, the pull hook will be disabled.[/en]
   *  [jp] [/jp]
   */
  disabled: React.PropTypes.bool,

  /**
   * @name height
   * @type number
   * @description
   *  [en] The height of the pull hook in pixels. The default value is 64.[/en]
   *  [jp] [/jp]
   */
  height: React.PropTypes.number,

  /**
   * @name thresholdHeight
   * @type number
   * @description
   *  [en] The threshold height of the pull hook in pixels. The default value is 96.[/en]
   *  [jp] [/jp]
   */
  thresholdHeight: React.PropTypes.number,

  /**
   * @name fixedContent
   * @type number
   * @description
   *  [en] If set to true, the content of the page will not move when pulling.[/en]
   *  [jp] [/jp]
   */
  fixedContent: React.PropTypes.bool
};

export default PullHook;
