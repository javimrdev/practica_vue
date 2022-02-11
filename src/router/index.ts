import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHeader
    }
  ]
})

export default router