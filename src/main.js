import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';
// 通过Vue 注册
Vue.use(VueRouter);
Vue.use(VueResource);
// 定义路由
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
// 创建router实例
const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router: router
}).$mount('#app');

router.push('/goods');

