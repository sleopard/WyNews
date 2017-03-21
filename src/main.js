// import Home from './view/Home.jsx';
window.React = require("react");
import ReactDOM from 'react-dom'
import Http from './base/http.js'

React.$http = new Http();

import App from './App'
require('./assets/less/main.less');

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
