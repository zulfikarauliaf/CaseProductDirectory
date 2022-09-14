'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("REST API Running",res)
};

//menampilkan data product
exports.getAll = function(req,res){
    connection.query('SELECT * FROM category', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};