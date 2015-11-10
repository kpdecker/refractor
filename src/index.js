import App from 'app';
import CrashReporter from 'crash-reporter';

import {buildMenu, openFile} from './menu';
import {createWindow} from './window-manager';

CrashReporter.start();

export function initApp() {
  App.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    /* istanbul ignore next */
    if (process.platform != 'darwin') {
      App.quit();
    }
  });

  App.on('ready', function() {
    buildMenu();

    if (process.argv.length > 2) {
      createWindow(process.argv[2]);
    } else {
      openFile();
    }
  });
}

initApp();
