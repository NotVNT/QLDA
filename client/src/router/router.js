import { createRouter, createWebHistory } from 'vue-router'

// Lazy-load views
const HomeView = () => import('@/views/HomeView.vue')
const SignInView = () => import('@/views/AuthView.vue')
const AdminView = () => import('@/views/AdminView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/signin', name: 'signin', component: SignInView },
  { path: '/admin', name: 'admin', component: AdminView },
  // Backward compatible shortcuts
  { path: '/login', redirect: { name: 'signin', query: { tab: 'login' } } },
  { path: '/register', redirect: { name: 'signin', query: { tab: 'register' } } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
