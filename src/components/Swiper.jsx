class Swiper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="swiper">
                <img src={this.props.swiper.imgsrc} />
            </div>
        )
    }
}
//http://www.toutiao.com/api/pc/focus/
export default Swiper;