import React from 'react';
import { render } from 'react-dom';
import store from './store.js';
import App from './App.jsx';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);