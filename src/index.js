import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import log from 'npmlog'

const app = express()

const corsOptions = {
  origin: 'http://localhost:8000'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to adafruit, we love arduino' })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  log.info('INIT', `Server is now running on port ${PORT}`)
})
