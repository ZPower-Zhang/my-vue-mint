import Layout from '@/views/layout/index'

export const routers = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    p: false,
    meta: { title: 'index', icon: 'lock', noCache: false, admin: false },
    children: [
      {
        path: '/home',
        name: 'home',
        p: false,
        component: () => import('@/views/home'),
        meta: { title: 'home', icon: 'lock', noCache: false, admin: false }
      }
    ]
  },
  {
    path: '/course',
    name: 'course',
    component: Layout,
    meta: { title: 'course', icon: 'lock', noCache: false, admin: false },
    children: [
      {
        path: 'intro',
        name: 'intro',
        component: () => import('@/views/course/intro'),
        meta: { title: 'intro', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/course/order'),
        meta: { title: 'order', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'lists',
        name: 'lists',
        component: () => import('@/views/course/lists'),
        meta: { title: 'lists', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'kyzdlists',
        name: 'kyzdlists',
        component: () => import('@/views/course/kyzdlists'),
        meta: { title: 'kyzdlists', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'contents',
        name: 'contents',
        component: () => import('@/views/course/contents'),
        meta: { title: 'contents', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'hindex',
        name: 'hindex',
        component: () => import('@/views/course/hindex'),
        meta: { title: 'hindex', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'videoView',
        name: 'videoView',
        component: () => import('@/views/course/videoView'),
        meta: { title: 'videoView', icon: 'lock', noCache: false, admin: false }
      }
    ]
  },
  {
    path: '/sign',
    name: 'sign',
    p: false,
    component: Layout,
    meta: { title: 'sign', icon: 'lock', noCache: false, admin: false },
    children: [
      {
        path: 'up',
        name: 'up',
        component: () => import('@/views/sign/up'),
        meta: { title: 'up', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'complete',
        name: 'complete',
        component: () => import('@/views/sign/complete'),
        meta: { title: 'complete', icon: 'lock', noCache: false, admin: false }
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    p: false,
    component: Layout,
    meta: { title: 'my', icon: 'lock', noCache: false, admin: false },
    children: [
      {
        path: 'morder',
        name: 'morder',
        component: () => import('@/views/my/morder'),
        meta: { title: 'morder', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'mstudy',
        name: 'mstudy',
        component: () => import('@/views/my/mstudy'),
        meta: { title: 'mstudy', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'mcollect',
        name: 'mcollect',
        component: () => import('@/views/my/mcollect'),
        meta: { title: 'mcollect', icon: 'lock', noCache: false, admin: false }
      },
      {
        path: 'conversion',
        name: 'conversion',
        component: () => import('@/views/my/conversion'),
        meta: { title: 'conversion', icon: 'lock', noCache: false, admin: false }
      }
    ]
  }
]
