import Vue from 'vue'
import './cube-ui'
import './vant'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import {getCookie, setCookie, delCookie} from "./cookie";
import setaxios from './setaxios'

setaxios();
Vue.config.productionTip = false;
// 全局挂载
Vue.prototype.$http=axios;
// 提示弹窗
Vue.prototype.$showToastType = function (type, message) {
  const toast = this.$createToast({
    txt: message,
    type: type
  });
  toast.show();
};
// cookie操作方法
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$delCookie = delCookie;

// bus中央事件总线也可以叫中间组件
Vue.prototype.$tmp = new Vue();

//路由守卫
router.beforeEach((to, from, next) => {
  //无论是刷新还是跳转路由，第一个进入的就是这个钩子函数
  let token = getCookie('token');
  store.commit('setToken', token);
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      // 跳转到登录页
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
