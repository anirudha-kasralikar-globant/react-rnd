// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './style/main.less';
import App from './container/App';

declare var module: any;

const mountNode = document.getElementById('app');
if (mountNode !== null) {
  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
  }

  const getProvider = () => (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  ReactDOM.render(getProvider(), mountNode);
}

module.hot.accept();
