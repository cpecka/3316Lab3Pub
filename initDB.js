const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '34.134.144.213',
    user: 'root',
    password: 'root',
    database: 'Lab3Db'
});

connection.connect();

connection.query(
    'DROP TABLE Users'
, (err,rows,fields) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Table Dropped");
    }
});

connection.query(
    'CREATE TABLE Users (Name char(30), TimeSlot1 char(11), TimeSlot2 char(11), TimeSlot3 char(11), TimeSlot4 char(11), TimeSlot5 char(11), TimeSlot6 char(11), TimeSlot7 char(11), TimeSlot8 char(11), TimeSlot9 char(11), TimeSlot10 char(11));'
, (err,rows,fields) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Table Created");
    }
});

connection.end();
