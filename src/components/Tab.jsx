import SimpleWrapper from './SimpleWrapper.jsx';

/**
 * @original ons-tab
 * @category tabbar
 * @description
 * [en] Represents a tab inside tab bar.
 [/en]
 * [jp][/jp]
 * @example
 * <Tap>
 *   Home
 * </Tap>
 */
class Tab extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-tab';
  }
};

export default Tab;
