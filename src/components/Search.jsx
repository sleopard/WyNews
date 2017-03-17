import React from 'react'
import ReactDOM from 'react-dom'
class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search-background"></div>
                <div className="search-content">
                    <div className="search-tb">
                        <div className="search-icon">
                            <i></i>
                        </div>
                        <div className="form">
                            <div className="form-content">
                                <input className="weui-input" type="text" placeholder="搜索商品/店铺" />
                                <input type="submit" className="search-button" />
                            </div>
                        </div>
                        <div className="operation">登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;