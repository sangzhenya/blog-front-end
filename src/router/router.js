import AdminContent from '@/components/admin/AdminContent'
import Main from '@/components/Main'

export const loginRouter = {
  path: '/admin/login',
  name: 'login',
  meta: {
    title: 'Login - Login'
  },
  component: () => import('@/components/admin/lock/Login')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404 - 404'
  },
  component: () => import('@/components/error/E404')
};

export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403 - 403'
  },
  component: () => import('@/components/error/E403')
};

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500 - 500'
  },
  component: () => import('@/components/error/E500')
};

export const preview = {
  path: '/preview',
  name: 'preview',
  component: () => import('@/components/Content')
};

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/components/admin/lock/Lock')
};

export const mainRouter = {
  path: '/',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: '',
      title: {i18n: 'home'},
      name: 'content',
      component: () => import('@/components/Content')
    },
    {
      path: ':page(\\d+)',
      title: 'contentPage',
      name: 'contentPage',
      component: () => import('@/components/Content')
    },
    {
      path: 'category',
      title: 'category',
      name: 'category',
      component: () => import('@/components/Category')
    },
    {
      path: 'category/:id(\\d+)',
      title: 'categoryPage',
      name: 'categoryPage',
      component: () => import('@/components/CategoryArticle')
    },
    {
      path: 'about',
      title: 'about',
      name: 'about',
      component: () => import('@/components/About')
    },
    {
      path: 'article/:id(\\d+)',
      title: 'article',
      name: 'article',
      component: () => import('@/components/Article')
    }
  ]
};

export const otherRouter = {
  path: '/other',
  name: 'otherRouter',
  redirect: '/other/home',
  component: AdminContent,
  children: [
    { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/components/admin/AdminIndex') },
    { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/components/admin/AdminIndex') },
    { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/components/admin/AdminIndex') }, // 用于展示动态路由
    { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/components/admin/AdminIndex') }, // 用于展示带参路由
    { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/components/admin/AdminIndex') }
  ]
};

export const appRouter = [
  {
    path: '/access-test',
    icon: 'lock-combination',
    title: '权限测试页',
    name: 'accesstest',
    access: 0,
    component: AdminContent,
    children: [
      { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/components/admin/AdminIndex') }
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
        component: () => import('@/components/admin/AdminIndex')
      },
      {
        path: 'management/article',
        icon: 'compose',
        name: 'articleManage',
        title: 'Article Manage',
        component: () => import('@/components/admin/content/ArticleManagement')
      },
      {
        path: 'management/category',
        icon: 'compose',
        name: 'categoryManage',
        title: 'Category Manage',
        component: () => import('@/components/admin/content/CategoryManagement')
      },
      {
        path: 'tool/message',
        icon: 'message',
        name: 'messageTool',
        title: 'Message Tool',
        component: () => import('@/components/admin/tool/MessageTool')
      },
      {
        path: 'message/edit/:id(\\d+)',
        icon: 'message',
        name: 'adminMessageEdit',
        title: 'Admin ContentMessageEdit',
        component: () => import('@/components/admin/tool/AdminMessageEdit')
      },
      {
        path: 'other',
        icon: 'other',
        name: 'adminOther',
        title: 'Admin ContentOther',
        component: () => import('@/components/admin/AdminOther')
      }
    ]
  }
];

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
];

export default [
  mainRouter
]
