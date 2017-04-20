window.React = require("react");
window.ReactDOM = require("react-dom");
import Http from './base/http.js'
import SnowLeoRouter from './router'
import routers from './routers'

import App from './App'

require('./assets/less/main.less');

new SnowLeoRouter(routers)
React.$http = new Http();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
