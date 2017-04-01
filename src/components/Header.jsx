import React from 'react'
import ReactDOM from 'react-dom'
debugger;
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <div className="personal">
                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/icon-personal-v2.png" />
                </div>
                <div>
                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/logo_2016_v2.png" />
                </div>
                <div className="info">
                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/icon-email-v2.png" />
                </div>
            </header>
        )
    }
}
export default Header;