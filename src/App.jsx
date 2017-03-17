import Home from './view/Home'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <header></header>
                <Home slider={[]} />
                <footer></footer>
            </div>
        )
    }
}
export default App;



//