// import Home from './view/Home.jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import Http from './base/http.js'
window.ReactCom = {}
window.ReactCom.$http = new Http();

import App from './App'
require('./assets/less/main.less');

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
