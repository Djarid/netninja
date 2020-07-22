import Vue from 'vue'
import VueRouter from 'vue-router'
import GMap from '@/views/GMap'
// import Signup from '@/views/Signup'
// import Login from '@/views/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'GMap',
    component: GMap
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '@/views/Signup')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
