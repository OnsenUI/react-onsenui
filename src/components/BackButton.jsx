import SimpleWrapper from './SimpleWrapper.jsx';

/**
 * @original ons-back-button
 * @category page
 * @description
 * [en] Back button component for Toolbar. It enables to automatically to pop the top pae of the navigator. When only presented with one page, the button is hidden automatically.  [/en]
 * [jp] どうしよう[/jp]
 * @example
  <BackButton> Back </BackButton>
 */

class BackButton extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-back-button';
  }
};

export default BackButton;
