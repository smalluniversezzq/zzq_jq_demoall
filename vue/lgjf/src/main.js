import Vue from 'vue'
import App from './App.vue'
// 引入路由router index 文件
import router from './router/index.js'
// import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// import $ from 'jquery'
//引入axios 
// import axios from 'axios'  
// import qs from 'qs'
// Vue.use(iView);
// Vue.prototype.$axios = axios;    //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs;           //全局注册，使用方法为:this.qs

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})