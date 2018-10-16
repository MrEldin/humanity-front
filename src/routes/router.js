import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Vacations from '../views/Vacations.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      meta: {
        auth: true
      },
      path: '/',
      name: 'default'
    },
    {
      meta: {
        auth: true
      },
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      meta: {
        auth: true
      },
      path: '/vacations',
      name: 'vacations',
      component: Vacations
    },
    {
      meta: {
        auth: false,
        layout: 'login'
      },
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
