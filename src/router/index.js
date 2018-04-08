import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Category from '@/components/Category'
import About from '@/components/About'
import AdminLogin from '@/components/admin/AdminLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLogin
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
