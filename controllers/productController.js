// Import product model
Product = require('../models/productModel');

// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            success: 1,
            message: "Products retrieved successfully",
            data: products
        });
    });
};

// Handle create product actions
exports.new = function (req, res) {
    var product = new Product();
    product.laptopName = req.body.laptopName ? req.body.laptopName : product.laptopName;
    product.price = req.body.price;
    product.description = req.body.description;
    product.imageSrc = req.body.imageSrc;
    product.create_date = req.body.create_date;
// save the product and check for errors
    product.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New product created!',
            data: product
        });
    });
};

// Handle view product info
exports.view = function (req, res) {
    Product.findById(req.params.laptopName, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};