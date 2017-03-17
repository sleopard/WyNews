const routerConfig = [
    {
        path: '/',
        component: App,
        childrenRoutes: [
            { path: 'about', component: About },
            { path: 'inbox', component: Inbox },
        ]
    }
];

export default routerConfig;