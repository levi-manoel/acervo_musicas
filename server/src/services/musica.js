import db from '../db/index.js'

async function listar() {
  const { data: musicas } = await db.musica.select('*')

  return musicas
}

export default {
  listar,
}
