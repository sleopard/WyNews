import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <a href="#/">
                    <img src='static/img/a8z.png' />
                    <span>新闻</span>
                </a>
                <a href="#/seeding">
                    <img src='static/img/a_e.png' />
                    <span>直播</span>
                </a>
                <a href="#/">
                    <img src='static/img/a_c.png' />
                    <span>话题</span>
                </a>
                <a href="#/center">
                    <img src='static/img/a90.png' />
                    <span>我</span>
                </a>
            </footer>
        )
    }
}
export default Footer;