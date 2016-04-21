import SimpleWrapper from './SimpleWrapper.jsx';
import ReactDOM from 'react-dom';

class SpeedDialItem extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-speed-dial-item';
  }

  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    CustomElements.upgrade(node);
    node.addEventListener('click', this.props.onClick);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('click', this.props.onClick);
  }
};

export default SpeedDialItem;
