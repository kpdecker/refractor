/* global document */
import {expect} from 'chai';
import IPC from 'ipc';
import * as Store from '../src/store';

describe('renderer bootstrap', function() {
  it('should render to the app view', function() {
    let store = {
      dispatch: this.spy(),
      subscribe() {},
      getState() {
        return {
          files: {}
        };
      }
    };

    this.stub(IPC, 'on');
    this.stub(Store, 'default', () => store);

    let appView = document.createElement('div');
    appView.id = 'app-view';
    document.body.appendChild(appView);

    require('../src/bootstrap');

    expect(IPC.on).to.have.been.calledOnce;
    expect(document.querySelector('h1')).to.exist;

    IPC.on.args[0][1]('foo');
    expect(store.dispatch).to.have.been.calledWith('foo');
  });
});
