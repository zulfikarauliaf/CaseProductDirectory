'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');
    var category = require('./controllerCategory');

    app.route('/')
        .get(jsonku.index);

    app.route('/getAll')
        .get(jsonku.getAllProduct);

    app.route('/getCategory')
        .get(category.getAllCategory);
}