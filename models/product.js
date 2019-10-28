// I'm working with MySQL now, so I don't need this
// const fs = require('fs');
// const path = require('path');

// module.exports = class Product {
//     constructor(testTitle, id, imageUrl, description, price){
//         this.title = testTitle;
//         this.id = id;
//         this.imageUrl = imageUrl;
//         this.description = descriptioin;
//         this.price = price;
//     }

//     save() { //function in a class
//         const p = path.join(path.dirname(process.mainModule.filename), 'database', 'products.json');
//         fs.readFile(p, (err, fileContent) => {
//             let products = [];
//              if (!err) {
//                  //fileContent is in JSON format so we have to change to array/object
//                 products = JSON.parse(fileContent); 
//             }
//             products.push(this);
//             ///writeFile is like saying savefile
//             //in the arguments: we're converting products back to JSON format
//             fs.writeFile(p, JSON.stringify(products), (err) => {
//             console.log(err);
//             })
//         });
//     }


//     //If you don't understand this, watch Chapter 7 - MVC(6. Storing Data in Files Via the Model)
//     static fetchAll(cb){
//         const p = path.join(path.dirname(process.mainModule.filename), 'database', 'products.json');
//         fs.readFile(p, (err, fileContent) => {
//             if (err){
//                 cb([]);
//             } else{
//             cb(JSON.parse(fileContent));
//             }
//         })
//     }
// }

//USING SQL
// const db = require('../util/database');

// module.exports = class Product {
//     constructor(testTitle, id, imageUrl, description, price){
//         this.title = testTitle;
//         this.id = id;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save() {
//         return db.execute(
//             'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', 
//             [this.title, this.price, this.description, this.imageUrl]
//             // ['Aaasss', '3311', 'rafafssff', 'https://afklafaklnlfaknfsasfa']
//         );

//     }

//     static fetchAll(){
//         return db.execute('SELECT * FROM products');
//     }
// }

// USING SEQUELIZE

// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const Product = sequelize.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title: Sequelize.STRING,
//     price: {
//         type: Sequelize.DOUBLE,
//         allowNull: false
//     },
//     imageUrl: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// module.exports = Product;

const getDb = require('../util/database').getDb;

const mongoConnect = require('../util/database');

class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        const db = getDb();
        db.collection('products')
        .insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
}