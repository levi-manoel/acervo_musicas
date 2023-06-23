// import 'dotenv/config'
import axios from 'axios'

const url = 'https://acervo-musicas-server.onrender.com/musicas'

const api = axios.create({
  baseURL: url
})

async function listar() {
  try {
    const response = await api.get('/listar')
    return response
    
  } catch (error) {
    console.log(error)
  }
}

export default {
  listar
}
