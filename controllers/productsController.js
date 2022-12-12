let products = require('../data/database')
const express = require('express')
const controller = express.Router()

controller.param("articleNumber", (req, res, next, articleNumber) => {
    req.product = products.find(x => x.articleNumber == articleNumber)
    next()
})
controller.param("tag", (req, res, next, tag) => {
    req.products = products.filter(x => x.tag == tag)
    next()
})

controller.route('/details/:articleNumber').get((req, res) => {
    if(req.product != undefined)
        res.status(200).json(req.product)
    else
        res.status(404).json()
})
controller.route('/:tag').get((req, res) => {
    if(req.products != undefined)
        res.status(200).json(req.products)
    else
        res.status(404).json()
})
controller.route('/:tag/:take').get((req, res) => {
    let list = []

    for (let i = 0; i < Number(req.params.take); i++)
        list.push(req.products[i])

    if(req.products != undefined)
        res.status(200).json(list)
    else
        res.status(404).json()
})

//* http://localhost:5000/api/products

controller.param("id", (req, res, next, id) => {
    req.product = products.find(product => product.id == id)
    next()
})

controller.route('/')
.post((req, res) => {
    let product = {
        id: (products[products.length -1])?.id > 0 ? (products[products.length -1])?.id +1 :1,
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        rating: req.body.rating,
        price: req.body.price
    }
    products.push(product)
    res.status(201).json(product)
})
.get((req, res) => {
    res.status(200).json(products)
})


controller.route("/:id")
.get((req, res) => {
    if (req.product != undefined)
        res.status(200).json(req.product)
    else 
        res.status(404).json()
})
.put((req, res) => {
    if (req.product != undefined) {
        products.forEach(product => {
            if (product.id == req.product.id) {
                product.title = req.body.title ? req.body.title : product.title
                product.category = req.body.category ? req.body.category : product.category
                product.description = req.body.description ? req.body.description : product.description
                product.rating = req.body.rating ? req.body.rating : product.rating
                product.price = req.body.price ? req.body.price : product.price
            }
        })
        res.status(200).json(req.product)
    }
    else 
        res.status(404).json()
})
.delete((req, res) => {
    if (req.product != undefined) {
        products = products.filter(product => product.id !== req.product.id)
        res.status(204).json()
    }
    else 
        res.status(404).json()
})



module.exports = controller