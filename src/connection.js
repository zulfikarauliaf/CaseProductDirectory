var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'yp-product'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
});

module.exports = conn;