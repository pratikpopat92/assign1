const mongoose = require('mongoose');
const product = require('../models/product');

module.exports.getAllProducts = function (req, res) {
    product.find().populate('categories').exec(function (err, result) {
        res.send(result);
    });
}

module.exports.getProductsByCategory = function (req, res) {
    let productcategory=req.params.id;
    product.find({productcategory:productcategory}).populate('categories').exec(function(err,result){
res.send(result);
    });
}

module.exports.addProduct = function (req, res) {
    let pname = req.body.productname;
    let pprice = req.body.productprice;
    let pcategory = req.body.productcategory;
    let p = new product({
        productname: pname,
        productprice: pprice,
        productcategory: pcategory
    });
    p.save(function (err, result) {
        res.send(result);
    })
}

module.exports.updateProduct = function (req, res) {
    let id = req.params.id;
    let updates = req.body;
    product.findByIdAndUpdate(id, updates, { new: true, useFindAndModify: true }, function (err, result) {
        res.send(result);
    });
}
