window.React = require("react");
window.ReactDOM = require("react-dom");
import Http from './base/http.js'
import SnowLeoRouter from './core/snowLeoRouter'
import routers from './routers'

import App from './App'

require('./assets/less/main.less');

React.$http = new Http();
React.$SnowLeoRouter = new SnowLeoRouter(routers)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);