import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: () => import('../views/workspace.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/orders.vue'),
  },
  {
    path: '/ptable',
    name: 'Ptable',
    component: () => import('@/components/Ptable.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
