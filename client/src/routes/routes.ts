import { RouteRecordRaw } from 'vue-router';
import Layout from '../components/layout/layout.vue';
import { HOME, HOMEHOME, LOGIN } from './route-name';

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: LOGIN,
    meta: { requiresAuth: false },
    // @ts-ignore
    component: () => import('../pages/login.vue')
  },

  {
    path: '/home',
    name: HOME,
    meta: { requiresAuth: true },
    component: Layout,
    redirect: '/home/home',
    children: [
      {
        path: 'home',
        name: HOMEHOME,
        meta: { requiresAuth: true, authtype: 'all', title: '首页' },
        component: () => import('../pages/home.vue')
      }
    ]
  }
] as readonly RouteRecordRaw[];
