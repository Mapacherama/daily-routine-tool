import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/routine-builder',
      name: 'routine-builder',
      component: () => import('../components/RoutineBuilder.vue')
    },
  ]
})

export default router