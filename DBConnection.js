const mysql = require('mysql');

function newConnection(){

    let connection = mysql.createConnection({
        host: '34.134.144.213',
        user: 'root',
        password: 'root',
        database: 'Lab3Db'
    });
    return connection;
}
module.exports = newConnection;