import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from '../views/PaginaInicial/PaginaInicial.vue'
import Musicas from '../views/Musicas/Musicas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagina-inicial',
      component: PaginaInicial
    },
    {
      path: '/musicas',
      name: 'musicas',
      component: Musicas
    }
  ]
})

export default router
