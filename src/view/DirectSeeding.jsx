export default class PersonalCenter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                seed
            </div>
        )
    }
    componentWillMount() {
        function previewlist() {
            debugger;
        }
        React.$http.jsonp("http://data.live.126.net/livechannel/previewlist.json").then((result) => {
            debugger;
            this.setState({
                list: result.list
            });
            let silderList = [];
            result.focus.forEach((v, k) => {
                if (v.title && v.picInfo.length > 0) {
                    silderList.push({ title: v.title, picUrl: v.picInfo[0].url })
                }
            })
            ReactDOM.render(
                <Slider sliderList={silderList} />,
                this.refs.slider
            );
        })

    }
}