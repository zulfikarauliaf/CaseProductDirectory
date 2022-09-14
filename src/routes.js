'use strict';

module.exports = function(app) {
    var product = require('./controllerProduct');
    var category = require('./controllerCategory');

    app.route('/')
        .get(product.index);

    app.route('/product')
        .get(product.getAllProduct);

    app.route('/product/:id')
        .get(product.getbyId);

    app.route('/product/search/:id')
        .get(product.getbyCategory);
        
    app.route('/category')
        .get(category.getAll);
}