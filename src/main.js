// import Home from './view/Home.jsx';

import { HashRouter as Router, Route } from 'react-router-dom';
import Http from './base/http.js'
window.ReactCom = {}
window.ReactCom.$http = new Http();

import App from './App'
import PersonalCenter from './view/PersonalCenter'
require('./assets/less/main.less');

ReactDOM.render(
  (<Router>
    <div>
      <Route exact path="/" component={App} >

      </Route>
      <Route path="/center" component={PersonalCenter} />
    </div>
  </Router>
  ),
  document.getElementById('root'),
);
