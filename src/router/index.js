import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp.vue'

const routes = [
  { path: '/',                      name: 'home',          component: MainComp },
  { path: '/login',                 name: 'login',         component: () => import("../views/LoginView.vue") },
  { path: '/categories/item/:cno',  name: 'item',          component: () => import("../views/ItemsView.vue") },
  { path: '/product/search/:typed', name: 'search',        component: () => import("../views/SearchItems.vue") },
  { path: '/product/detail/:pno',   name: 'product',       component: () => import("../views/ProductDetail.vue") },
  { path: '/notice/NoticeList',     name: 'NoticeList',    component: () => import("../views/NoticeList.vue") },
  { path: '/notice/NoticeView/:bno', name: 'NoticeView',   component: () => import('../views/NoticeView.vue') },
  { path: '/inquire/InquireList',   name: 'InquireList',   component: () => import('../views/InquireList.vue') },
  { path: '/inquire/InquireWrite',  name: 'InquireWrite',  component: () => import('../views/InquireWrite.vue') },
  { path: '/inquire/InquireView',   name: 'InquireView',   component: () => import('../views/InquireView.vue') },
  { path: '/inquire/InquireModify', name: 'InquireModify', component: () => import('../views/InquireModify.vue') },
  { path : '/joinmember',           name : 'joinmember',   component: () => import("../components/JoinMember.vue")},
  { path : '/mypage',               name : 'mypage',       component: () => import("../components/MyPage.vue")},
  { path : '/passverify',           name : 'passverify',   component: () => import("../components/PassVerify.vue")},
  { path : '/notice/NoticeWrite',   name : 'NoticeWrite',  component : () => import("../views/NoticeWrite")},
  { path: '/cart',                  name: 'cart',          component: () => import("../views/Cart.vue")},
  { path: '/orderList',             name: 'orderlist', component: () => import("../views/OrderList.vue")},
  { path: '/orderPage',             name: 'orderPage', component: () => import("../views/OrderPage.vue")},
  { path: '/orderFinish',           name: 'orderFinish', component: () => import("../views/OrderFinish.vue")},
  { path: '/orderDetail',           name: 'orderDetail', component: () => import("../views/OrderDetail.vue")}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
