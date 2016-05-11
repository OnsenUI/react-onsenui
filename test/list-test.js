 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {List} from '../dist/react-onsenui.js';
import TestUtils from 'react/lib/ReactTestUtils';
import rendersToComponent from './testUtil.js';

describe('List', function() {
  rendersToComponent(
    <List dataSource={[]} renderRow={() => <div />} />,
    'ons-list'
  );
});
