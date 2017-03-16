// import Search from './../components/Search'
// import Swiper from './../components/Swiper'
import Home from './view/Home'
import Http from './base/http.js'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <header></header>
                <Home />
                <footer></footer>
            </div>
        )
    }
}
export default App;



//