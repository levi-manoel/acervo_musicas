import express from 'express'
import routers from './routers/index.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.use('/musicas', routers.musica)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
