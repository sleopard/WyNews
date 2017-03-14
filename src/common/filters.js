import Vue from 'vue'
Vue.filter('bigMoney', (value) => {
    let money = "¥" + value
    if (money.includes(".")) {
        return money.substr(0, money.lastIndexOf("."))
    } else {
        return money;
    }
})
Vue.filter('smallMoney', (value) => {
    let money = String(value)
    if (money.includes(".")) {
        let small = money.substr(money.lastIndexOf("."));
        if (small.length < 3) {
            small += "0".repeat(3 - small.length);
        }
        return small;
    } else {
        return '.00';
    }
})