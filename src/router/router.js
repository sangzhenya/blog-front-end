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
    }
  ]
}

export const routers = [
  mainRouter
]

export default [
  mainRouter
]
