import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/service/:id',
      name: 'service-detail',
      component: () => import('../views/ServiceDetail.vue')
    },
    {
      path: '/case/:id',
      name: 'case-detail',
      component: () => import('../views/ServiceDetail.vue')
    },
    {
      path: '/solution/:id',
      name: 'solution-detail',
      component: () => import('../views/ServiceDetail.vue')
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('../views/ServiceDetail.vue')
    }
  ],
})

export default router
