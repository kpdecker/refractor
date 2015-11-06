import Window from './window';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
export let windows = new Set();

export function createWindow(file) {
  let newWindow = new Window(file);

  // Prevent the window from being grabage collected and closed
  newWindow.on('close', function() {
    windows.delete(newWindow);
  });
  windows.add(newWindow);
}
