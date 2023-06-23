import express from 'express'
import routers from './src/routers'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/musicas', routers.musica)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
