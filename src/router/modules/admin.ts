const admin: Array<Object>= [
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/user',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/layout/index.vue'),
        children: [
            {
                path: 'userManagement',
                name: 'userManagement',
                component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/user-management/user.vue'),
                meta: {
                    title: '用户管理' ,
                    level: 1
                }
            }
        ]
    }
]

export default admin