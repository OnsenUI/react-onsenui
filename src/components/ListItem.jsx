import ReactDOM from 'react-dom';
import SimpleWrapper from './SimpleWrapper.jsx';

class ListItem extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-list-item';
  }

  componentDidMount() {
    super.componentDidMount();
    this.node = ReactDOM.findDOMNode(this);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.node._compile();
  }
};

export default ListItem;
