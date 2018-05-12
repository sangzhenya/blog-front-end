import AdminContent from '@/components/admin/AdminContent'
import Main from '@/components/Main'

export const loginRouter = {
  path: '/admin/login',
  name: 'login',
  meta: {
    title: 'Login - Login'
  },
  component: () => import('@/components/admin/AdminLogin')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404 - 404'
  },
  component: () => import('@/components/Content')
};

export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403 - 403'
  },
  component: () => import('@/components/Content')
};

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500 - 500'
  },
  component: () => import('@/components/Content')
};

export const preview = {
  path: '/preview',
  name: 'preview',
  component: () => import('@/components/Content')
};

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/components/Content')
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
    { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/components/admin/AdminContentIndex') },
    { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/components/admin/AdminContentIndex') },
    { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/components/admin/AdminContentIndex') }, // 用于展示动态路由
    { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/components/admin/AdminContentIndex') }, // 用于展示带参路由
    { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/components/admin/AdminContentIndex') }
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
      { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/components/admin/AdminContentIndex') }
    ]
  },
  {
    path: '/admin',
    icon: 'social-buffer',
    title: '组件',
    component: AdminContent,
    children: [
      {
        path: '',
        icon: 'compose',
        name: 'index',
        title: 'Index',
        component: () => import('@/components/admin/AdminContentIndex')
      },
      {
        path: '',
        icon: 'message',
        name: 'adminContentMessage',
        title: 'AdminContentMessage',
        component: () => import('@/components/admin/AdminContentMessage')
      },
      {
        path: '',
        icon: 'other',
        name: 'adminContentOther',
        title: 'AdminContentOther',
        component: () => import('@/components/admin/AdminContentOther')
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
