import { createRouter, createWebHistory } from 'vue-router'

/**
 * 如果报错重新下载 npm install vue-router@next --save
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/login',
    name: 'LoginRegister',
    component: () => import('../views/LoginRegister.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
