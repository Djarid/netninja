import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
//import Chat from '@/views/Chat'

/*eslint no-unused-vars: ["error", { "args": "after-used"}]*/

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/Chat.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next()
      } else {
        next({name: 'Welcome', params: {feedback: 'You must specify a name'}})
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
