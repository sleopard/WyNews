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
                    <img src='static/img/a8z.png' />
                    <span>新闻</span>
                </a>
                <a>
                    <img src='static/img/a_e.png' />
                    <span>直播</span>
                </a>
                <a>
                    <img src='static/img/a_c.png' />
                    <span>话题</span>
                </a>
                <a>
                    <img src='static/img/a90.png' />
                    <span>我</span>
                </a>
            </footer>
        )
    }
}
export default Footer;