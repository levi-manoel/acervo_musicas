import express from 'express'
import controllers from '../controllers/index.js'

const router = express.Router()

router
  .get('/listar', controllers.musica.listar)

export default router
