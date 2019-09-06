import Vue from 'vue'
import './cube-ui'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
