import {openFile, buildMenu} from '../src/menu';
import * as WindowManager from '../src/window-manager';

import {expect} from 'chai';
import Dialog from 'dialog';
import Menu from 'menu';

describe('menu', function() {
  describe('#openFile', function() {
    it('should display open file menu', function() {
      this.stub(Dialog, 'showOpenDialog');
      openFile();

      expect(Dialog.showOpenDialog).to.have.been.calledOnce;
    });

    it('should create new window on open', function() {
      this.stub(Dialog, 'showOpenDialog', (options, cb) => cb(['file']));
      this.stub(WindowManager, 'createWindow');
      openFile();

      expect(WindowManager.createWindow)
          .to.have.been.calledOnce
          .to.have.been.calledWith('file');
    });
  });

  describe('#buildMenu', function() {
    it('should register menu', function() {
      this.stub(Menu, 'setApplicationMenu');

      buildMenu();
      expect(Menu.setApplicationMenu).to.have.been.calledOnce;
    });
  });
});
