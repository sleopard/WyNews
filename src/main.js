import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from './components/Home';
import './assets/content/weui.min.css';
require('./assets/less/base.less');
import Tabbar from './components/Tabbar';

ReactDOM.render(
  <Home />,
  document.getElementById('root'),
);