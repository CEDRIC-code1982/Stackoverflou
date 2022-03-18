import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from './store';

import App from './components/App';

import './styles.scss';

// on charge le css de notre librairie de composants
//import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

