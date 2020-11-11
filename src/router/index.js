import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/HomePage.vue')
  },
  {
    path: '/addProduct',
    name: 'AddPage',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddPage.vue')
  },
  {
    path: '/addBanner',
    name: 'AddBanner',
    component: () => import(/* webpackChunkName: "addBanner" */ '../views/AddBanner.vue')
  },
  {
    path: '/banner',
    name: 'BannerPage',
    component: () => import(/* webpackChunkName: "banner" */ '../views/BannerPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router