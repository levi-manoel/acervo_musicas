import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Musicas from '../views/Musics/Musicas.vue'

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
      component: Musicas
    }
  ]
})

export default router
