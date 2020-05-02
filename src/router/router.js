import AdminContent from '@/views/admin/AdminContent'
import Main from '@/views/Main'

export const loginRouter = {
  path: '/admin/login',
  name: 'login',
  meta: {
    title: 'Login - Login'
  },
  component: () => import('@/views/admin/lock/Login')
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404 - 404'
  },
  component: () => import('@/views/error/E404')
}

export const page403 = {
  path: '/error/403',
  name: 'error-403',
  meta: {
    title: '403 - 403'
  },
  component: () => import('@/views/error/E403')
}

export const page500 = {
  path: '/error/500',
  name: 'error-500',
  meta: {
    title: '500 - 500'
  },
  component: () => import('@/views/error/E500')
}

export const preview = {
  path: '/preview',
  name: 'preview',
  component: () => import('@/views/Content')
}

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/views/admin/lock/Lock')
}

export const mainRouter = {
  path: '/',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: '',
      title: { i18n: 'home' },
      name: 'content',
      component: () => import('@/views/Content')
    },
    {
      path: ':page(\\d+)',
      title: 'contentPage',
      name: 'contentPage',
      component: () => import('@/views/Content')
    },
    {
      path: 'category',
      title: 'category',
      name: 'category',
      component: () => import('@/views/Category')
    },
    {
      path: 'category/:id(\\d+)',
      title: 'categoryPage',
      name: 'categoryPage',
      component: () => import('@/views/CategoryArticle')
    },
    {
      path: 'about',
      meta: {
        title: 'About'
      },
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: 'article/:id(\\d+)',
      title: 'article',
      name: 'article',
      component: () => import('@/views/Article')
    }
  ]
}

export const otherRouter = {
  path: '/other',
  name: 'otherRouter',
  redirect: '/other/home',
  component: AdminContent,
  children: [
    { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/admin/AdminIndex') },
    { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/admin/AdminIndex') },
    { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/admin/AdminIndex') }, // 用于展示动态路由
    { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/admin/AdminIndex') }, // 用于展示带参路由
    { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/admin/AdminIndex') }
  ]
}

export const appRouter = [
  {
    path: '/access-test',
    icon: 'lock-combination',
    title: '权限测试页',
    name: 'accesstest',
    access: 0,
    component: AdminContent,
    children: [
      { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/admin/AdminIndex') }
    ]
  },
  {
    path: '/admin',
    icon: 'social-buffer',
    redirect: '/admin/index',
    title: '组件',
    component: AdminContent,
    children: [
      {
        path: 'index',
        icon: 'compose',
        name: 'adminIndex',
        title: 'Index',
        component: () => import('@/views/admin/AdminIndex')
      },
      {
        path: 'management/article',
        icon: 'compose',
        name: 'articleManage',
        title: 'Article Manage',
        component: () => import('@/views/admin/content/ArticleManagement')
      },
      {
        path: 'management/article/:id(\\d+)',
        title: 'Article Manage',
        name: 'articleManageById',
        component: () => import('@/views/admin/content/ArticleManagement')
      },
      {
        path: 'management/batch/article',
        icon: 'compose',
        name: 'articleBatchManage',
        title: 'Article Batch Manage',
        component: () => import('@/views/admin/content/ArticleBatchManagement')
      },
      {
        path: 'management/category',
        icon: 'compose',
        name: 'categoryManage',
        title: 'Category Manage',
        component: () => import('@/views/admin/content/CategoryManagement')
      },
      {
        path: 'tool/message',
        icon: 'message',
        name: 'messageTool',
        title: 'Message Tool',
        component: () => import('@/views/admin/tool/MessageTool')
      },
      {
        path: 'tool/message/edit/:id(\\d+)',
        icon: 'message',
        name: 'adminMessageEdit',
        title: 'Admin ContentMessageEdit',
        component: () => import('@/views/admin/tool/MessageEdit')
      }
    ]
  }
]

export const routers = [
  loginRouter,
  mainRouter,
  otherRouter,
  preview,
  locking,
  ...appRouter,
  page500,
  page403,
  page404
]

export default [
  mainRouter
]
