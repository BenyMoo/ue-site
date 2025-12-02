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
      path: '/cases',
      name: 'cases',
      component: () => import('../views/Cases.vue')
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/Solutions.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
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
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicy.vue')
    }
  ],
})

export default router
