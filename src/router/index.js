// import Vue from 'vue'
import Router from 'vue-router'
import Util from '../libs/util';
import Cookies from 'js-cookie';

// eslint-disable-next-line
//import store from '@/vuex/store'

import {routers, mainRouter, appRouter, otherRouter} from './router';

// Vue.use(Router)

const RouterConfig = {
  routes: routers
};

export const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
// eslint-disable-next-line
//console.log(store.state.count);
  Util.title(to.meta.title);
  let curRouterObj = Util.getRouterObjByName([mainRouter], to.name);
  if (curRouterObj != null) {
    Util.toDefaultPage([...routers], to.name, router, next);
  } else {
    if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
      next({
        replace: true,
        name: 'locking'
      });
    } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
      next(false);
    } else {
      if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
          name: 'login'
        });
      } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
        Util.title();
        next({
          name: 'adminIndex'
        });
      } else {
        curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name);
        if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
          if (curRouterObj.access === parseInt(Cookies.get('access'))) {
            Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next); // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
          } else {
            next({
              replace: true,
              name: 'error-403'
            });
          }
        } else { // 没有配置权限的路由, 直接通过
          Util.toDefaultPage([...routers], to.name, router, next);
        }
      }
    }
  }
});

router.afterEach((to) => {
  window.scrollTo(0, 0);
});

export default router;
