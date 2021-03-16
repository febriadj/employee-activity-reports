const
  express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  path = require('path'),
  port = process.env.PORT || 8080
  app = express()

// set template engine
app.set('view engine', 'pug')
  
// middleware
require('dotenv').config()
require('./config/db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public/img')))
app.use(express.static(path.join(__dirname, 'public/css')))
app.use(express.static(path.join(__dirname, 'public/css/pages')))
app.use(express.static(path.join(__dirname, 'public/js')))

// routes
app.use(require('./routes/index'))

// listening port
app.listen(port, () => console.log('http://localhost:' + port))