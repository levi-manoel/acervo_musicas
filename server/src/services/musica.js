import db from '../db/index.js'

async function listar() {
  const musicas = await db.musica.select('*')

  return musicas
}

export default {
  listar,
}
