import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Containers/App';

import store from './Store';

const storeS = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeS}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
