import Vue from 'vue'
import Router from 'vue-router'
import home from '../conponents/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
