//import express module
const express = require('express');
//import mysql2 module
const mysql = require('mysql2');
// set up the listener port 
const app=express();
//create an listener port 
const port = 4000;
//define database connection parameters
const dbConfig = {
    host: 'localhost',
    user: 'garage',
    password:'garage',
    database: 'garage',

};
//create a connection to the database
const connection = mysql.createConnection(dbConfig);
//connect to the database
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});



//create the simple get request handler 
app.get('/',(req,res)=>{
    res.send('Hello World!');

});

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});