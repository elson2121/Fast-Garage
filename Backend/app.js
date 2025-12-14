//import express module
const express = require('express');
//import mysql2 module
const mysql = require('mysql2');
// set up the listener port 
const app=express();
//create an listener port 
const port = 4000;
//middleware to parse JSON request bodies
app.use(express.json());
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
// post request handler to add a new employe 
app.post('/add-employee',(req,res)=>{
    console.log(req.body); 
//write the sql query to insert a data in customer table
    const sql = 'INSERT INTO employee (first_name,last_name,email,password) VALUES (?,?,?,?)';
    const {first_name,last_name,email,password} = req.body;
    //execute the query
    connection.query(sql,function (err,result){
        if(err){
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Employee added successfully');
    });
//send a response back to the client




});


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});