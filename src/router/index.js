import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Musics from '../views/Musics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/musicas',
      name: 'musicas',
      component: Musics
    }
  ]
})

export default router
