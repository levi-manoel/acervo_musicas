import { createRouter, createWebHistory } from 'vue-router'
import Musicas from '../views/Musicas/Musicas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'musicas',
      component: Musicas
    }
  ]
})

export default router
