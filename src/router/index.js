export default function (options) {
    var _self = this;
    _self.$route = {}
    _self.$routers = options;
    var core = {
        init() {
            if (location.hash.length == 0) {
                this.push();
            } else {
                this.go(location.hash);
            }
            window.addEventListener("hashchange", (e) => {
                this.go(location.hash);
            });
        },
        lazyLoad(router) {
            router.component.then(function (Result) {
                _self.$route = {
                    name: router.name,
                    hash: location.hash
                }
                ReactDOM.render(
                    <Result />,
                    document.querySelector("router-view")
                );
            })
        },
        go(hash) {
            hash = hash.substr(location.hash.indexOf('#') + 1);
            let router = _self.$routers.find((o) => {
                return o.name == hash;
            })
            if (router) {
                this.lazyLoad(router)
            }
        },
        push(hash = '/') {
            window.location.hash = "#" + hash;
        }
    }
    core.init();
}