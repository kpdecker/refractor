import BrowserWindow from 'browser-window';
import Dialog from 'dialog';
import Menu from 'menu';
import {createWindow} from './window-manager';

export function openFile() {
  Dialog.showOpenDialog({
    filters: [
      { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }
    ],
    properties: ['openFile']
  }, function(files) {
    createWindow(files[0]);
  });
}

export function buildMenu() {

  let template = [
    {
      label: 'Refractor',
      submenu: [
        {
          label: 'About Refractor',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Refractor',
          accelerator: 'CmdOrCtrl+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'CmdOrCtrl+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          selector: 'terminate:'
        }
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: 'CmdOrCtrl+O',
          click: openFile
        }
      ]
    }
  ];

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') { // eslint-disable-line no-process-env
    template.push({
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click() {
            BrowserWindow.getFocusedWindow().reload();
          }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+CmdOrCtrl+I',
          click() {
            BrowserWindow.getFocusedWindow().toggleDevTools();
          }
        }
      ]
    });
  }

  template.push(
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'CmdOrCtrl+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          selector: 'performClose:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }
      ]
    },
    {
      label: 'Help',
      submenu: []
    }
  );

  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  return menu;
}
