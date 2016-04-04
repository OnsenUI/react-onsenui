import React from 'react';

const SLOTS = ['left', 'center', 'right'];

const hasClass = (className, cls) => ` ${className} `.indexOf(cls) > -1;

export default class extends React.Component {
  render() {
    const children = [];
    const sections = {};

    React.Children.forEach(this.props.children, function(child) {
      const hasProps = child.hasOwnProperty('props');

      const idx = SLOTS
        .map((slot) => hasProps && hasClass(child.props.className, slot))
        .indexOf(true);

      if (idx > -1) {
        const slot = SLOTS[idx];
        sections[slot] = child;
      } else {
        children.push(child);
      }
    });

    SLOTS.forEach((slot) => {
      sections[slot] = sections[slot] || <div key={slot} className={slot}>{slot === 'center' ? children : null}</div>;
    });

    return (
      <ons-list-item {...this.props}>
        {SLOTS.map((slot) => sections[slot])}
      </ons-list-item>
    );
  }
};
