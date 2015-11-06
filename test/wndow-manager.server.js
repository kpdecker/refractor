import {createWindow, windows} from '../src/window-manager';

import {expect} from 'chai';
import BrowserWindow from 'browser-window';

describe('window manager', function() {
  it('should track window while open', function() {
    this.stub(BrowserWindow.prototype, 'loadUrl');

    createWindow('file!');
    expect(windows.size).to.equal(1);

    let window = windows.values().next().value;
    expect(window.file).to.equal('file!');

    window.close();
    expect(windows.size).to.equal(0);
  });
});
