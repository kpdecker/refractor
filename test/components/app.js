import ConnectedApp, {App} from '../../src/components/app';

import {expect} from 'chai';
import {shallowRender} from '../utils';
import shallowUtils from 'react-shallow-testutils';

describe('app component', function() {
  it('should render app component', function() {
    let result = shallowRender(App, {files: {original: 'foo!'}});
    expect(result.type).to.equal('div');

    let img = shallowUtils.findAllWithType(result, 'img');
    expect(img).to.have.length(2);
    expect(img[0].props.src).to.eql('foo!');
  });

  it('should map state', function() {
    let store = {
      dispatch() {},
      getState() {
        return {files: 'foo!'};
      },
      subscribe() {}
    };
    let result = shallowRender(ConnectedApp, {store});
    expect(result.props.files).to.equal('foo!');
  });
});
