 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from '../dist/react-onsenui.js';
import TestUtils from 'react/lib/ReactTestUtils';

describe('Page', function() {
  it('renders to <ons-page>', function() {
    var root = TestUtils.renderIntoDocument(<Page> Hello </Page>);
    var node = ReactDOM.findDOMNode(root);
    assert.isNotNull(node);
    assert.equal(node.nodeName, 'ONS-PAGE');
  });
});
