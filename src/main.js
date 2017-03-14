import Home from './view/Home.jsx';
import Http from './base/http.js'
require('./assets/less/main.less');

var http = new Http();
//http://139.224.132.152/api/JD/GetWyNews
http.jsonp("http://www.toutiao.com/api/pc/feed/?category=news_tech&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A185D8BCA71C734&cp=58C77CA793342E1").then((result) => {
  ReactDOM.render(
    <Home list={result.data} />,
    document.getElementById('root'),
  );
})
