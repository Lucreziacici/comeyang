// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './script/axios'
import router from './router'
import VueWechatTitle from 'vue-wechat-title';  
// import VueAreaLinkage from 'vue-area-linkage';

import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'
import ElementUI from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueWechatTitle);
Vue.use(VueAreaLinkage)
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
