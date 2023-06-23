import services from '../services/index.js'

async function listar(req, res) {
  try {
    const musicas = await services.musica.listar()

    return res.status(200).send(musicas)
  } catch (error) {
    console.log('error:', error)
    return res.status(500).send(error)
  }
}

export default {
  listar,
}
