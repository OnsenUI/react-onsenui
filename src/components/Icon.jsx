import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-page
 * @category page
 * @description
 * [en] Displays an icon. [/en]
 * [jp] どうしよう[/jp]
 * @example
  <Icon
    size={{default: 32, material: 40}}
    icon={{default: 'ion-navicon', material: 'md-menu'}}
  />
/> */
class Icon extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-icon';
  }

  render() {
    var {icon, size, spin, fixedWidth, ...others} = this.props;

    if (fixedWidth) {
      others['fixed-width'] = true;
    }

    others['spin'] = spin ? true : null;

    if (icon) {
      if ((typeof icon) === 'string') {
        others.icon = icon;
      } else {
        let keys = Object.keys(icon).filter((a) => a !== 'default');
        let innerString = keys.map((key) => key + ':' + icon[key] + '');
        others.icon = icon.default + ', ' + innerString.join(',');
      }
    }

    if (size) {
      if ((typeof size) === 'number') {
        others.size = `${size}px`;
      } else {
        let keys = Object.keys(size).filter((a) => a !== 'default');
        let innerString = keys.map((key) => key + ':' + size[key] + 'px');
        others.size = size.default + 'px, ' + innerString.join(',');
      }
    }
    return React.createElement(this._getDomNodeName(), others, this.props.children);
  }

};

Icon.propTypes = {
  modifier: React.PropTypes.string,
  icon: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.objectOf(React.PropTypes.string)
  ]),
  size: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.objectOf(React.PropTypes.number)
  ]),
  rotate: React.PropTypes.oneOf([0, 90, 180, 270]),
  fixedWidth: React.PropTypes.bool,
  spin: React.PropTypes.bool

};

export default Icon;
