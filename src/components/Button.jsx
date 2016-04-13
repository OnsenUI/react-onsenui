import SimpleWrapper from './SimpleWrapper.jsx';

class Button extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-button';
  }
};

export default Button;
