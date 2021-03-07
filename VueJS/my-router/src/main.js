import Vue from 'vue'
import App from './App.vue'

// import VueRouter from 'vue-router';  //先import
// Vue.use(VueRouter);     //呼叫它(呼叫一次就可以了)

new Vue({
  el: '#app',
  render: h => h(App)
})
