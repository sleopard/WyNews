import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Home from './view/Home'
import Footer from './components/Footer'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Home />
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;



//