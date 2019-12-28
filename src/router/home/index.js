export default [
    {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
    }
]
