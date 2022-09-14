'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("REST API Running",res)
};

//menampilkan semua product
exports.getAllProduct = function(req,res){
    const name = req.query.name ? req.query.name : ''
    console.log(name)
    connection.query(`SELECT * FROM product WHERE name LIKE '%${name}%'` ,
    function(error, rows, fields){
        if(error){
            connection.log(error);
            // response.json(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan product byid
exports.getbyId = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM product WHERE id = ?', [id], 
    function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};
//menampilkan product by category
exports.getbyCategory = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM product WHERE category = ?', [id], 
    function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });

//menampilkan product by name
exports.getbyName = function(req,res){
    let name = req.query.name;
    connection.query('SELECT * FROM product WHERE name LIKE %?%', [name], 
    function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}
};