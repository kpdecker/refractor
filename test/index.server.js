import {initApp} from '../src/index';

import {expect} from 'chai';
import App from 'app';
import * as Menu from '../src/menu';
import * as WindowManager from '../src/window-manager';

describe('app', function() {
  let argv;
  beforeEach(() => argv = process.argv);
  afterEach(() => process.argv = argv);

  it('should init on ready', function() {
    this.stub(App, 'on');
    this.stub(Menu, 'buildMenu');
    this.stub(Menu, 'openFile');

    initApp();
    expect(App.on).to.have.been.calledTwice;

    process.argv = [];

    // Call the callback
    let readyCallback = App.on.args[1][1];
    readyCallback();

    expect(Menu.buildMenu).to.have.been.called;
    expect(Menu.openFile).to.have.been.called;
  });

  it('should open directly to file if passed arg', function() {
    this.stub(App, 'on');
    this.stub(Menu, 'buildMenu');
    this.stub(WindowManager, 'createWindow');

    initApp();
    expect(App.on).to.have.been.calledTwice;

    process.argv = ['foo', 'bar', 'file!'];

    // Call the callback
    let readyCallback = App.on.args[1][1];
    readyCallback();

    expect(Menu.buildMenu).to.have.been.called;
    expect(WindowManager.createWindow)
        .to.have.been.calledOnce
        .to.have.been.calledWith('file!');
  });

  it('should quit on closed windows', function() {
    this.stub(App, 'on');
    this.stub(App, 'quit');

    initApp();
    let closedCallback = App.on.args[0][1];
    closedCallback();

    expect(App.quit.callCount).to.equal(process.platform === 'darwin' ? 0 : 1);
  });
});
