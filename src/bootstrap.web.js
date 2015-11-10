/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import IPC from 'ipc';

import App from './components/app';

import createStore from './store';

let store = createStore();
console.log('foo', store, createStore);

IPC.on('action', function(action) {
  store.dispatch(action);
});

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app-view'));
