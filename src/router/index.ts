import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/employee/list.vue')
  },
  {
    path: '/employee-detail/:login',
    name: 'employee detail',
    component: () => import('pages/employee/detail.vue'),
    props: true
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router