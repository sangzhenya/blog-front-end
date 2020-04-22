import Vue from 'vue'
import Router from 'vue-router'
import Util from '../utils/util'
import Cookies from 'js-cookie'

import { mainRouter, routers } from './router'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Router)
}

const RouterConfig = {
  mode: 'history',
  routes: routers
}

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  let curRouterObj = Util.getRouterObjByName([mainRouter], to.name)
  if (curRouterObj != null) {
    Util.toDefaultPage([...routers], to.name, router, next)
  } else {
    if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
      next({
        replace: true,
        name: 'locking'
      })
    } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
      next(false)
    } else {
      if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
          name: 'login'
        })
      } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
        Util.title()
        next({
          name: 'adminIndex'
        })
      } else {
        // curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name)
        // if (curRouterObj && curRouterObj.access !== undefined) {
        //   if (curRouterObj.access === parseInt(Cookies.get('access'))) {
        //     Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next)
        //   } else {
        //     next({
        //       replace: true,
        //       name: 'error-403'
        //     })
        //   }
        // } else {
        //   Util.toDefaultPage([...routers], to.name, router, next)
        // }
      }
    }
  }
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
})

export default router
