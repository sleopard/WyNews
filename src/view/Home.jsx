import Search from './../components/Search'
import Swiper from './../components/Swiper'
import Http from './../base/http.js'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="list-content">
                    <ul>
                        {
                            this.props.list.map((item, k) =>
                                <li key={k}>
                                    <a>
                                        <div className="item-info">
                                            {item.title}
                                        </div>
                                        <div className="item-icon"><img src={item.image_url} /></div>
                                    </a>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Home;



//