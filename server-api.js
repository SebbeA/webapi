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
const newProductsController = require('./controllers/newProductsController')
app.use('/api/products', newProductsController)


// * Init
mongoDBInit()
app.listen(port, () => console.log(`Web Api is running att http://localhost:${port}`))
