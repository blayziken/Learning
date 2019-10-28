const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin1');

// const shopRoutes = require('./routes/shop');

const othersControllers = require('./controllers/others');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
    
app.use(express.static(path.join(__dirname, 'public')));

// const sequelize = require('./util/database');

const mongoConnect = require('./util/database').mongoConnect;

// db.execute('SELECT * FROM products')
//     .then(result => {
//         console.log(result[0]);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// app.get('/', othersControllers.GetHomePage)

app.get('/', othersControllers.NewHomePage);

app.use('/admin', adminRoutes);

// app.use(shopRoutes);

// app.use('/port', othersControllers.UsePort)

app.use(othersControllers.page404Error);

// sequelize
//     .sync()
//     .then(
//         // console.log(result);
//         app.listen(9090, ()=> {
//             console.log("App is running now at " + Date.now());
//         })
//     )
//     .catch(err => {
//         console.log(err);
//     })

mongoConnect(() => {
    app.listen(4000);
})