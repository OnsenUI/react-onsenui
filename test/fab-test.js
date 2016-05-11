 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Fab} from '../dist/react-onsenui.js';
import TestUtils from 'react/lib/ReactTestUtils';
import rendersToComponent from './testUtil.js';

describe('Fab', function() {
  rendersToComponent(
    <Fab />,
    'ons-fab'
  );
});
