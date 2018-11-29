import Vue from 'vue';
import Router from 'vue-router';
import home from '../conponents/home.vue';
import login from '../conponents/login.vue';
import parent from '../conponents/parent.vue';
// import header from '../conponents/subcpnent/header.vue';

Vue.use(Router)
  
export default new Router({
  routes: [
      //映射
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/parent',
            name: 'parent',
            component: parent
        }
        // {
        //     path: '/header',
        //     name: 'header',
        //     component: header   
        // }
        //重定向
        // {
        //     path: '/', 
        //     redirect: '/home' 
        // }
    ]
})


