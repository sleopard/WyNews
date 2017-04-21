export default class SnowLeoRouter {
    constructor(options) {
        this.opts = options;
        this.init();
    }
    init() {
        if (location.hash.length == 0) {
            this.hash = '/';
            this.push();
        } else {
            this.hash = location.hash.substr(location.hash.indexOf('#') + 1);
            this.go(this.hash);
        }
        window.addEventListener("hashchange", (e) => {
            this.go(this.hash);
        });
    }
    go(hash) {
        let router = this.opts.find((o) => {
            return o.name == hash;
        })
        if (router) {
            this.lazyLoad(router)
        }
    }
    lazyLoad(router) {
        router.component.then(function (result) {
            result(document.querySelector("router-view"));
        })
    }
    push(hash = '/') {
        window.location.hash = "#" + hash;
    }
    currentRouter() {
        let router = this.opts.find((o) => {
            return o.name == this.hash;
        })
        if (router) {
            return router;
        } else {
            return {}
        }
    }
}