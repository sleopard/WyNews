export default [
    {
        name: '/',
        component: require.ensure(['./view/Home'], function (require) {
            return require('./view/Home').default;
        })
    },
    {
        name: '/seed',
        component: require.ensure(['./view/DirectSeeding'], function (require) {
            return require('./view/DirectSeeding').default;
        })
    },
    {
        name: '/center',
        component: require.ensure(['./view/PersonalCenter'], function (require) {
            return require('./view/PersonalCenter').default;
        })
    },
]
