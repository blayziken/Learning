const pageData = require('./page');

const pageControllers = require('../controllers/page');

// const product = pageData.product;

const Product = require('../models/product');

exports.productsPage = (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "added.html"))
    Product.findAll()
    .then(products => {
        res.render('products', {
            prods: products, 
            pageTitle: 'Choppers Cart'
    })
})
    .catch(err => {
        console.log(err);
    })
}

exports.deleteProduct = (req, res, next) => {
    const productid = req.body.productid;
    Product.findById(productid)
    .then(product => {
        return product.destroy();
    })
    .then(result => {
        console.log('BlAzE, A PRODUCT HAS BEEN DELETED!!');
        res.redirect('/products-page');
    })
    .catch(err =>{
        console.log(err);
    })

    Product.f
}

    // Product.findAll()
    // .then(product => { 
    //     return product.destroy()
    // })
    // .then(result => {
    //     console.log('BlAzE, A PRODUCT HAS BEEN DELETED!!');
    //     res.redirect('/products-page');
    // })
    // .catch(err => {
    //     console.log(err);
    // })

    // Product.findById(productid)
    // .then(product => {
    //     return product.destroy();
    // })
    // .then(result => {
    //     console.log('BlAzE, A PRODUCT HAS BEEN DELETED!!');
    //     res.redirect('/products-page');
    // })
    // .catch(err =>{
    //     console.log(err);
    // })

//     Product.findAll()
//     .then(product => { 
//         return product.destroy()
//     })
//     .then(result => {
//         console.log('BlAzE, A PRODUCT HAS BEEN DELETED!!');
//         res.redirect('/products-page');
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }