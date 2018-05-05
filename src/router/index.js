import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Category from '@/components/Category'
import About from '@/components/About'
import Article from '@/components/Article'
import CategoryArticle from '@/components/CategoryArticle'
import AdminLogin from '@/components/admin/AdminLogin'
import AdminContent from '@/components/admin/AdminContent'
import AdminContentIndex from '@/components/admin/AdminContentIndex'
import AdminContentMessage from '@/components/admin/AdminContentMessage'
import AdminContentOther from '@/components/admin/AdminContentOther'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    },
    {
      path: '/:page(\\d+)',
      name: 'contentPage',
      component: Content
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/category/:id(\\d+)',
      name: 'categoryPage',
      component: CategoryArticle
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/article/:id(\\d+)',
      name: 'article',
      component: Article
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLogin
    },
    {
      path: '/admin',
      component: AdminContent,
      children: [
        {
          path: '',
          name: 'adminContentIndex',
          component: AdminContentIndex
        },
        {
          path: 'message',
          name: 'adminContentMessage',
          component: AdminContentMessage
        },
        {
          path: 'other',
          name: 'adminContentOther',
          component: AdminContentOther
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
