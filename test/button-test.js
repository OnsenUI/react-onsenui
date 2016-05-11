 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../dist/react-onsenui.js';
import TestUtils from 'react/lib/ReactTestUtils';

import rendersToComponent from './testUtil.js';

describe('Button', function() {
  rendersToComponent(
    <Button />,
    'ons-button'
  );
});
