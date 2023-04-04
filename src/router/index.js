import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp.vue'

const routes = [
  { path: '/', name: 'home', component: MainComp },
  { path: '/login', name: 'login', component: () => import("../views/LoginView.vue") },
  { path: '/categories/item/:cno', name: 'item', component: () => import("../views/ItemsView.vue") },
  { path: '/product/search/:typed', name: 'search', component: () => import("../views/SearchItems.vue") },
  { path: '/product/detail/:pno', name: 'product', component: () => import("../views/ProductDetail.vue") },
  { path: '/orderList', name: 'orderlist', component: () => import("../views/OrderList.vue")},
  { path: '/orderPage', name: 'orderPage', component: () => import("../views/OrderPage.vue")},
  { path: '/orderFinish', name: 'orderFinish', component: () => import("../views/OrderFinish.vue")},
  { path: '/orderDetail', name: 'orderDetail', component: () => import("../views/OrderDetail.vue")}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
