import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/views/404PageView.vue"
import Home from "@/views/HomeView.vue";
import Map from "@/views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/map',
      name: `Map`,
      component: Map
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
