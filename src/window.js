import BrowserWindow from 'browser-window';
import {loadOriginal} from './state/files';

export default class Window {
  constructor(file) {
    this.file = file;

    this.window = new BrowserWindow({width: 800, height: 600});
    this.window.loadUrl(`file://${__dirname}/index.html`);

    this.window.webContents.on('did-finish-load', () => {
      this.window.webContents.send('action', loadOriginal(file));
    });
  }

  close() {
    this.window.close();
    this.window = undefined;
  }

  on(... args) {
    return this.window.on(... args);
  }
}
