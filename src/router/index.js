import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp.vue'

const routes = [
  { path: '/', name: 'home', component: MainComp },
  { path: '/login', name: 'login', component: () => import("../views/LoginView.vue") },
  { path: '/categories/item/:cno', name: 'item', component: () => import("../views/ItemsView.vue") },
  { path: '/product/search', name: 'search', component: () => import("../views/SearchItems.vue") }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
