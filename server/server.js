require('dotenv').config()

const express = require('express')
const app = express()
const port = 8080
const expressListRoutes = require('express-list-routes')
const pastriesRouter = require('./routes/pastries_router')
app.use(express.static('client'))

app.use(express.json())

app.get('/test', (req, res) => {
  res.send('its working')
})

app.use(pastriesRouter)

expressListRoutes(app)

app.listen(port,() => {
  console.log(`listening on port ${port}`)
})