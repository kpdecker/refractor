import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function() {
  let store = applyMiddleware(thunk)(createStore)(reducers);

  /* istanbul ignore next */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // https://github.com/rackt/react-redux/releases/tag/v2.0.0
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
