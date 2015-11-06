import BrowserWindow from 'browser-window';

export default class Window {
  constructor(file) {
    this.window = new BrowserWindow({width: 800, height: 600});
    this.window.loadUrl(`file://${__dirname}/index.html`);

    this.window.webContents.on('did-finish-load', () => {
      this.window.webContents.send('action', {type: 'LOAD_FILE', payload: {file}});
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
