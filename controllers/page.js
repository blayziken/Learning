const Product = require('../models/product');

// const rootDir = require('../util/path');

exports.GetAddProduct = (req, res, next) => {
    res.render('addproduct', {
        pageTitle: 'Add Products',
        // prods: products,
    })   
}

exports.PostAddProduct = (req, res, next) => {
        const title = req.body.title;
        const id = req.body.id;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price; 
        
        Product.create({
            id: id,
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description
        })
        .then(() => {
            res.redirect('/products-page');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.Getpage2 = (req, res, next) => {
    res.render('find', {
        pageTitle: 'Find Product'
    })
    // res.sendFile(path.join(rootDir, 'views', 'find.html' ))
    // res.send('<form action = "/admin/page2-button" METHOD="post"><INPUT TYPE="text" name = "title"><BUTTON type ="submit">Find</BUTTON></form>')
}

// exports.Postpage2Button = (req, res, next) => {
//        const title = req.body.title;
//        const id = req.body.id;
//        const imageUrl = req.body.imageUrl;
//        const description = req.body.description;
//        const price = req.body.price; 
//        const product = new Product(title, id, imageUrl, description, price);

//     product.save()
//     .then(() => {
//         res.redirect('/products-page');
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }


