import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router'
import './assets/styles/common.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
