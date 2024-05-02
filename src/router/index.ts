import { userAuthStore } from '@/stores/auth';
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }

  ]
});

router.beforeEach(async(to)=> {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = userAuthStore();

  if(authRequired && !auth.user) {
    return '/login';
  }
})

export default router
