import $ from './jquery.min'
export default class Http {
    constructor() {
        this.baseApi = "";
    };
    jsonp(url, data = {}) {
        let urlParams = '';
        for (let key in data) {
            urlParams = urlParams + `&${key}=${data[key]}`;
        }
        if (urlParams) {
            url = url.indexOf('?') < 0 ? url + '?' + urlParams : url + '&' + urlParams;
        }
        return this.request({
            type: "get",
            async: false,
            url: url,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "jsonpCallback",
        });
    }
    get(url, data = {}) {
        let urlParams = '';
        for (let key in data) {
            urlParams = urlParams + `&${key}=${data[key]}`;
        }
        if (urlParams) {
            url = url.indexOf('?') < 0 ? url + '?' + urlParams : url + '&' + urlParams;
        }
        return this.request({
            type: "get",
            async: false,
            url: this.baseApi + url,
            dataType: "json"
        });
    }
    post(url, data = {}) {
        var formData = new FormData();
        for (var item in data) {
            formData.append(item, data[item]);
        }
        return this.request({
            type: "post",
            data: formData,
            async: false,
            url: this.baseApi + url,
            dataType: "json"
        });
    }
    request(options) {
        var promise = $.ajax(options)
        return promise;
    }
}