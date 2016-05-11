 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from '../dist/react-onsenui.js';
import TestUtils from 'react/lib/ReactTestUtils';
import rendersToComponent from './testUtil.js';

describe('Carousel', function() {
  rendersToComponent(
    <Carousel />,
    'ons-carousel'
  );
});
