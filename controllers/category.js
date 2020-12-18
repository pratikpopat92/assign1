const mongoose = require('mongoose');
let category = require('../models/category');
module.exports.addCategory = function (req, res) {
    let categoryname = req.body.categoryname;
    let subcatname = [...req.body.subcatname];
    console.log(categoryname,subcatname);
    let c = new category({
        categoryname: categoryname,
        subcatname: subcatname
    });
    c.save(function (err, result) {
        res.send(result);
    });
    
}

module.exports.getCategories = function (req, res) {
category.find(function(err,result){
    res.send(result);
})
}

