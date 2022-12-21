require('dotenv').config()
const port = process.env.API_PORT || 9000
const mongoDBInit = require('./server-mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// * Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// * Routes
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)
const authenticationController = require('./controllers/authenticationController')
app.use('/api/authentication', authenticationController)


// * Init
mongoDBInit()
app.listen(port, () => console.log(`Web Api is running att http://localhost:${port}`))

