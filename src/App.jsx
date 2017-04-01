import React from 'react'
import Header from './components/Header'
import Home from './view/Home'
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import DirectSeeding from './view/DirectSeeding'
import PersonalCenter from './view/PersonalCenter'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route path="/seeding" component={DirectSeeding} />
                        <Route path="/center" component={PersonalCenter} />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default App;