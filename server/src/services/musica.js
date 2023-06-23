import db from '../db'

async function listar() {
  const musicas = await db.musica.select('*')
  
  return musicas
}

export default {
  listar,
}
