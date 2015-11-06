import Window from '../src/window';

import {expect} from 'chai';
import BrowserWindow from 'browser-window';

describe('window class', function() {
  it('should create and load a new window', function() {
    this.stub(BrowserWindow.prototype, 'loadUrl');
    let window = new Window('file!');
    expect(BrowserWindow.prototype.loadUrl).to.have.been.calledOnce;

    this.stub(window.window.webContents, 'send');
    window.window.webContents.emit('did-finish-load');
    expect(window.window.webContents.send)
        .to.have.been.calledOnce
        .to.have.been.calledWith('action', {'type': 'LOAD_FILE', payload: {file: 'file!'}});

    window.close();
    expect(window.window).to.not.exist;
  });

  it('should expose events', function(done) {
    this.stub(BrowserWindow.prototype, 'loadUrl');
    let window = new Window('file!');

    window.on('foo', function() {
      // window.close();
      done();
    });
    window.window.emit('foo');
  });
});
