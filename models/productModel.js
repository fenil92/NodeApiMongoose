// productModel.js
var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    laptopName: {
        type: String,
        required: true,
        minlength :1,
        trim: true
    },
    price: {
        type: String,
        required: true
    },
    description: String,
    imageSrc: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Product model
var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}