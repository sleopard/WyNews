export default class SnowLeoRouter {
    constructor(options) {
        this.opts = options;
        this.init();
    }
    init() {
        if (location.hash == "") {
            this.push("/")
        } else {
            this.go(location.hash);
        }
        window.addEventListener("hashchange", (e) => {
            this.go(location.hash);
        });
    }
    go(hash) {
        const i = hash.indexOf('#');
        hash = hash.substr(i + 1)
        let router = this.opts.find((o) => {
            return o.name == hash;
        })
        if (router) {
            this.lazyLoad(router)
        }
    }
    lazyLoad(router) {
        router.component.then(function (result) {
            let el = document.querySelector("router-view");
            result(el);
        })
    }
    push(hash) {
        window.location.hash = hash;
    }
}