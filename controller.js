'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("REST API Running")
};
