const main: Array<Object>= [
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue')
    }
]

export default main