import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/views/404PageView.vue"
import Home from "@/views/HomeView.vue";
import TestView from '@/views/TestView.vue';
import UserView from "@/views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/tags',
      name: `Test`,
      component: TestView
    },
    {
      path: '/user',
      name: 'User',
      component: UserView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
