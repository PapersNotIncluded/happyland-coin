import { createRouter, createWebHistory } from 'vue-router'
import HappyCoinMain from '@/pages/HappyCoinMain.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HappyCoinMain,
      meta: {
        title: 'HappyCoin',
      },
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicyPage,
      meta: {
        title: 'HappyCoin - Политика конфиденциальности',
      },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0,
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : 'HappyCoin'
})

export { router }
