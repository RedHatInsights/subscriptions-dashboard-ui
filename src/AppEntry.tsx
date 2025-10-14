import React from 'react';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import logger from 'redux-logger';
import { Middleware } from 'redux';

const AppEntry = () => (
  <Provider
    store={init(
      ...(process.env.NODE_ENV !== 'production' ? [logger as Middleware] : []),
    ).getStore()}
  >
    <App />
  </Provider>
);

export default AppEntry;
