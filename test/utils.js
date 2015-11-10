import React from 'react';
import TestUtils from 'react-addons-test-utils';

export function shallowRender(View, props) {
  let renderer = TestUtils.createRenderer();
  renderer.render(<View {...props} />);

  return renderer.getRenderOutput();
}
