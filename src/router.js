import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

Vue.use(VueRouter)

const routes = [{
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router