import React from 'react'
import ReactDOM from 'react-dom'
import Search from './../components/Search'
import Slider from './../components/Slider'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        this.Init();
    }
    render() {
        return (
            <div>
                <div ref="slider"></div>
                <div className="list-content">
                    <ul>
                        {
                            this.state.list.map((item, key) => {
                                let count = item.picInfo.length;
                                if (item.title) {
                                    if (item.imgsrc3gtype == 1) {
                                        return <li key={key}>
                                            <a>
                                                <div className="item-icon">
                                                    {item.picInfo.map((v, k) =>
                                                        <img key={k} src={v.url} />
                                                    )}
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-title">
                                                        {item.title}
                                                    </div>
                                                    <div className="item-more">
                                                        <div className="article_channel left">{item.category}</div>
                                                        <div className="article_time left">{item.ptime}</div>
                                                        <div className="article_read right">{item.tcount}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    } else {
                                        return <li key={key}>
                                            <a style={{ display: 'block' }}>
                                                <div className="item-info">
                                                    <div className="item-title">
                                                        {item.title}
                                                    </div>
                                                </div>
                                                <div className="item-icon" style={{ width: '100%' }}>
                                                    {item.picInfo.map((v, k) =>
                                                        <img key={k} style={{ width: '30%' }} src={v.url} />
                                                    )}
                                                </div>
                                                <div className="item-info">
                                                    <div className="item-more">
                                                        <div className="article_channel left">{item.category}</div>
                                                        <div className="article_time left">{item.ptime}</div>
                                                        <div className="article_read right">{item.tcount}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    }
                                }
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
    Init() {
        var _self = this;
        React.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-10.html?hasad=1&offset=0&size=50").then((result) => {
            _self.setState({
                list: result.list
            });
            let silderList = [];
            result.focus.forEach((v, k) => {
                if (v.title && v.picInfo.length > 0) {
                    silderList.push({ title: v.title, picUrl: v.picInfo[0].url })
                }
            })
            ReactDOM.render(
                <Slider sliderList={silderList} />,
                _self.refs.slider
            );
        })
    }
}
export default Home;