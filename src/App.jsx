import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Home from './view/Home'
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
} from 'react-router-dom'

const rootRoute = {
    path: '/index',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('./view/Home'))
            }, '')
        },
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./view/PersonalCenter'))
        }, 'Main')
    },
    // childRoutes: [
    //     require('./routes/baidu'),
    //     require('./routes/404'),
    //     require('./routes/redirect')
    // ]
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {/*<Home />*/}
                    <Router
                        history={browserHistory}
                        routes={rootRoute}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;



//