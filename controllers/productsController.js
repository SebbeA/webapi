const express = require('express')
const controller = express.Router()

//* Authorize for secured routes
const { authorize } = require('../middlewares/authorization')

const productSchema = require('../schemas/productSchema')

// * Unsecured routes
controller.route('/')
.get(async (req, res) => {
    const products = []
    const list = await productSchema.find()
        if(list) {
            for(let product of list) {
                products.push({           
                    articleNumber: product._id,
                    tag: product.tag,
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    rating: product.rating,
                    imageName: product.imageName
                })
            }
            res.status(200).json(products)
        } else
            res.status(400).json()
})
controller.route('/:tag')
.get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })
    if(list) {
        for(let product of list) {
            products.push({           
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})
controller.route('/:tag/:take')
.get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if(list) {
        for(let product of list) {
            products.push({           
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})
controller.route('/product/details/:articleNumber')
.get(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    if(product) {
        res.status(200).json({           
            articleNumber: product._id,
            tag: product.tag,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating,
            imageName: product.imageName
        })
    } else
        res.status(404).json()
})

// * Secured routes, works only with Postman
controller.route('/')
.post(async (req, res) => {
    const { tag, name, description, category, price, rating, imageName } = req.body
    if(!name || !price)
        res.status(400).json({text: 'Name and price is required.'})

    const product_exists = await productSchema.findOne({name})
    if (product_exists)
        res.status(409).json({text: 'A product with the same name already exists.'})
    else {
        const product = await productSchema.create({
            tag,
            name,
            description,
            category,
            price,
            rating,
            imageName
        })
        if (product)
            res.status(201).json(product)
        else 
            res.status(400).json({text: 'Something went wrong when you tried to create the product.'})
    }

})
controller.route('/:articleNumber')
.put(authorize, async (req, res) => {
    if (!req.params.articleNumber) {
        res.status(400).json({text: 'No article number was specified.'})
    } else {
        // Find the product with the specified article number
        const product = await productSchema.findById(req.params.articleNumber)
        if (product) {
            // Update the product with the new information from the request body
            product.name = req.body.name ? req.body.name : product.name,
            product.category = req.body.category ? req.body.category : product.category,
            product.description = req.body.description ? req.body.description : product.description,
            product.rating = req.body.rating ? req.body.rating : product.rating,
            product.price = req.body.price ? req.body.price : product.price

            // Save the updated product to the database and return the updated document
            const updatedProduct = await product.save({new: true})
            res.status(200).json(updatedProduct)
        } else {
            res.status(404).json({text: `The product with article number ${req.params.articleNumber} was not found.`})
        }
    }
})
controller.route('/:articleNumber')
.delete(authorize, async (req, res) => {
    if (!req.params.articleNumber)
        res.status(400).json('No article number was specified.')
    else {
        const product = await productSchema.findById(req.params.articleNumber)
        if (product) {
            await productSchema.deleteOne(product)
            res.status(200).json({text: `The product with article number ${req.params.articleNumber} was successfully deleted.`})
        } else {
            res.status(404).json({text: `The product with article number ${req.params.articleNumber} was not found.`})
        }
    }
})

module.exports = controller