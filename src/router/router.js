import Main from '@/views/Main'

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
      path: 'article/:id(\\d+)',
      title: 'article',
      name: 'article',
      component: () => import('@/views/Article')
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
    }
  ]
}

export const routers = [
  mainRouter
]

export default [
  mainRouter
]
