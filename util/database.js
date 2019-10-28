// Using mysql
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'tacheuar20#'
// });

// module.exports = pool.promise();

// Using Sequelize:

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'tacheuar20#', {
//     dialect: 'mysql', 
//     host: 'localhost' 
// });

// module.exports = sequelize;


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://tolu:sTqZaPQDBWbb6sep@cluster0-8qiqo.mongodb.net/shop?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
    )
    .then(client => {
        _db = client.db()
        console.log('Connected');
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!'
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;