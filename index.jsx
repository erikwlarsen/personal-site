import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './client/containers/App';
import store from './client/store';
import './client/stylesheets/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
