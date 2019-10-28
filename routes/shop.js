const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router()

const productControllers = require('../controllers/products')

router.get('/products-page', productControllers.productsPage)

router.post('/products-page', productControllers.deleteProduct)

module.exports = router;