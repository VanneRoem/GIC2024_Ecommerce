import Category from '@/components/Category.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { 
    Path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories/catagoryId",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/products/:productId",
    name: "product",
    component:() => import("../views/ProductView.vue"),
  },
    
  ]
})


export default router
