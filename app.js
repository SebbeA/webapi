const port = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// * Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// * Routes/Controllers
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)

// * start Web Api
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`))