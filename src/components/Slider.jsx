import React from 'react'
class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.Init();
    }
    render() {
        return (
            <div className="slider">
                {this.props.sliderList.map((v, k) => {
                    return <a key={k} className={this.state.index == k ? 'active' : ''}>
                        <img src={v.picUrl} />
                        <div className="slider-title">{v.title}</div>
                    </a>
                }
                )}
            </div>
        )
    }
    Init() {
        var _self = this;
        setInterval(() => {
            _self.state.index++;
            if (_self.state.index >= _self.props.sliderList.length) {
                _self.state.index = 0;
            }
            _self.setState({
                index: _self.state.index
            })
        }, 3000)
    }
}
export default Slider;