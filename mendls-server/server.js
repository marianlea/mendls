require('dotenv').config()

const express = require('express')
const app = express()
const port = 8080
const expressListRoutes = require('express-list-routes')
const pastriesRouter = require('./routes/pastries_router')
const checkoutRouter = require('./routes/checkout_router')
app.use(express.static('client'))

app.use(express.json())

app.get('/test', (req, res) => {
  res.send('its working')
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(pastriesRouter)
app.use(checkoutRouter)

expressListRoutes(app)

app.listen(port,() => {
  console.log(`listening on port ${port}`)
})