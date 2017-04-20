import React from 'react'
import Header from './components/Header'
import Home from './view/Home'
import Footer from './components/Footer'
import DirectSeeding from './view/DirectSeeding'
import PersonalCenter from './view/PersonalCenter'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <router-view></router-view>
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;