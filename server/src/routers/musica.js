import express from 'express'
import controllers from '../controllers'

const router = express.Router()

router
  .get('/listar', controllers.musica.listar)

export default router
