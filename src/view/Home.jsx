import Search from './../components/Search'
import Slider from './../components/Slider'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.Init();
        this.state = { list: [], slider: [] }
    }
    render() {
        return (
            <div>
                {/*<Slider slider={this.props.slider} />*/}
                <div className="swiper">
                    {this.state.slider.map((item, key) => {
                        if (item.title && item.picInfo.length > 0) {
                            console.log(item);
                            < a >
                                <img src={item.picInfo[0].url} />
                            </a>
                        }
                    })}
                </div>
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
        ReactCom.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-10.html?hasad=1&offset=0&size=50").then((result) => {
            _self.state.slider = result.focus;
            _self.state.list = result.list;
            _self.setState(_self.state);
        })
    }
}
export default Home;