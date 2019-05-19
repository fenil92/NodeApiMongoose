// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to Ecom crafted with love!'
    });
});

// Import product controller
var productController = require('./controllers/productController');
// Product routes
router.route('/product')
    .get(productController.index)
    .post(productController.new);

// router.route('/product/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// Export API routes
module.exports = router;