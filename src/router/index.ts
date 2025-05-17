import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Q1 from '@/views/quiz/q1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Q1,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/quiz/q2.vue'),
    },
    {
      path: '/q3',
      name: 'q3',
      component: () => import('@/views/quiz/q3.vue'),
    },
    {
      path: '/q4',
      name: 'q4',
      component: () => import('@/views/quiz/q4.vue'),
    },
    {
      path: '/q5',
      name: 'q5',
      component: () => import('@/views/quiz/q5.vue'),
    },
  ],
})

export default router
