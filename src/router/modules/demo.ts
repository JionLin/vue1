const main: Array<Object>= [
    {
        path: '/demo',
        name: 'demo',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'demoTest',
                component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/index.vue'),
                meta: {
                    title: '测试' ,
                    level: 1
                }
            }
        ]
    }
]

export default main