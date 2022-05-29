import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePhones from '../views/HomePhones.vue'
import DetailPhones from '../components/DetailPhones.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homephones',
        component: HomePhones
    },
    {
        path: '/details',
        name: 'detailphones',
        component: DetailPhones
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router