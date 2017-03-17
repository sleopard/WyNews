import React from 'react'
import ReactDOM from 'react-dom'
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <a>
                    <span>新闻</span>
                </a>
                <a>
                    <span>直播</span>
                </a>
                <a>
                    <span>话题</span>
                </a>
                <a>
                    <span>我</span>
                </a>
            </footer>
        )
    }
}
export default Footer;