const express = require('express');
const app = express();
const newConnection = require('./DBConnection');

app.use(express.static('static'));

app.get('/users', (req, res) => {
    let conn=newConnection();

    let userList;
    conn.connect();

    conn.query(`SELECT * FROM Users`, (err, rows, fields)=>{
        let content='';
        userList=rows;
        for(i of userList){
            
            let a1;
            let a2;
            let a3;
            let a4;
            let a5;
            let a6;
            let a7;
            let a8;
            let a9;
            let a10;

            if(i.TimeSlot1 == 'undefined'){
                a1 = 'unavailable';
            }
            else{
                a1='available';
            }

            if(i.TimeSlot2 == 'undefined'){
                a2 = 'unavailable';
            }
            else{
                a2='available';
            }
            if(i.TimeSlot3 == 'undefined'){
                a3 = 'unavailable';
            }
            else{
                a3='available';
            }
            if(i.TimeSlot4 == 'undefined'){
                a4 = 'unavailable';
            }
            else{
                a4='available';
            }
            if(i.TimeSlot5 == 'undefined'){
                a5 = 'unavailable';
            }
            else{
                a5='available';
            }
            if(i.TimeSlot6 == 'undefined'){
                a6 = 'unavailable';
            }
            else{
                a6='available';
            }
            if(i.TimeSlot7 == 'undefined'){
                a7 = 'unavailable';
            }
            else{
                a7='available';
            }
            if(i.TimeSlot8 == 'undefined'){
                a8 = 'unavailable';
            }
            else{
                a8='available';
            }
            if(i.TimeSlot9 == 'undefined'){
                a9 = 'unavailable';
            }
            else{
                a9='available';
            }
            if(i.TimeSlot10 == 'undefined'){
                a10 = 'unavailable';
            }
            else{
                a10='available';
            }

            content+= '<div>';
            content+= i.Name+'---------------------------------------------<div>Time Slot 1:  '+ a1 +"<div> Time Slot 2:  "+a2+"<div> Time Slot 3:  "+a3+"<div> Time Slot 4:  "+a4+"<div> Time Slot 5:  "+a5+"<div> Time Slot 6:  "+a6+"<div> Time Slot 7:  "+a7+"<div> Time Slot 8:  "+a8+"<div> Time Slot 9:  "+a9+"<div> Time Slot 10: "+a10;
            content+= '</div>';
            content+= '</br>';

        }
        res.send(content);
    })
    conn.end();
})

app.get('/newInput', (req, res) =>{
    let conn = newConnection();
    conn.connect();

    conn.query(`INSERT INTO Users VALUES('${req.query.usr}', '${req.query.time1}', '${req.query.time2}', '${req.query.time3}', '${req.query.time4}', '${req.query.time5}', '${req.query.time6}', '${req.query.time7}', '${req.query.time8}', '${req.query.time9}', '${req.query.time10}')`, (err, rows, fields)=>{
        res.redirect('/');
    });

    conn.end();
})

app.use(express.urlencoded({
    extended: true
}))

app.post('/login', (req,res) => {
    let userName = req.body.usr;
    let password = req.body.pwd;
    let message = "Access Denied!";
    if(userName == 'admin' && password == '123')
    {
        message = 'Welcome';
    }
    res.send(message);
})

app.listen(80);