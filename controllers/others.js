exports.NewHomePage = (req, res) => {
    res.render('Shop', {
        pageTitle: 'Shop'
    });
}

// exports.GetHomePage = (req, res) => {
//     // res.sendFile(path.join(rootDir, "views", "home.html"))
//     res.render('home', {
//         pageTitle: 'Home'
//     })
// }

exports.UsePort = (req, res) => {
    res.sendFile(path.join(rootDir,'Test run', 'index.html'))
}

exports.page404Error = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not found'
    });
}