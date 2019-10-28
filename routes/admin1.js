const path = require('path');

const express = require('express');

const router = express.Router();

const pageControllers = require('../controllers/page');

// router.get('/page1', pageControllers.Getpage1);

router.get('/page2', pageControllers.Getpage2);

// router.get('/page3', pageControllers.Getpage3);

router.get('/add-product', pageControllers.GetAddProduct);

// router.post('/add-product', pageControllers.PostAddProduct);

// router.post('/page2-button', pageControllers.Postpage2Button);

module.exports = router;