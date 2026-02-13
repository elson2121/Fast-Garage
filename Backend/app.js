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
// define database connection parameters
const dbConfig = {
    host: 'localhost',
    user: 'garage',
    password:'1234',
    database: 'garagedb',

};
//create a connection to the database
const connection = mysql.createConnection(dbConfig);
//connect to the database 
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
        return;
    }
    
//the outpu
    console.log('Connected to the MySQL database.');
});


//create the simple get request handler 
 app.get('/',(req,res)=>{     res.send('Hello World!');
 });


app.post('/add-employee', (req, res) => {
    console.log(req.body); 
    
    const sql = 'INSERT INTO employee (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    
  // 1. Destructure the values from the request body
    const { first_name, last_name, email, password } = req.body;
    
 // 2. Create an array containing these values in the EXACT same order as the SQL query
 const values = [first_name, last_name, email, password];
   // 3. Pass the 'values' array as the second argument to connection.query
   connection.query(sql, values, function (err, result) {
    if (err) {
         console.error('Error inserting data:', err);
       res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Employee added successfully');
    });
});


// Post request handler for login (verifying employee)
// app.post('/log', (req, res) => {
//     console.log("Login attempt for:", req.body.email);

//     // 1. Define the SQL query to find a matching email AND password
//     const sql = 'SELECT * FROM employee WHERE email = ? AND password = ?';
    
//     // 2. Extract email and password from the request body (sent via Postman)
//     const { email, password } = req.body;
//     const values = [email, password];

//     // 3. Execute the query
//     connection.query(sql, values, (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).send('Server error during login');
//         }

//         // 4. Check if we found a match (results will be an array)
//         if (results.length > 0) {
//             // Success! We found a user with those credentials
//             console.log("Login successful for:", results[0].first_name);
//             res.status(200).json({
//                 message: "Login successful",
//                 user: results[0] // Sends the user data back to the client
//             });
//         } else {
//             // Fail! No user found with that email/password combination
//             console.log("Login failed: Invalid credentials");
//             res.status(401).send('Invalid email or password');
//         }
//     });
// });
// Post request handler for login (verifying employee)
app.post('/log', (req, res) => {
    const { email, password } = req.body;
    
    // This looks for the user in your existing employee table
    const sql = 'SELECT * FROM employee WHERE email = ? AND password = ?';
    
    connection.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Error searching database');
        }

        // If results.length > 0, it means the email/password match someone in the table
        if (results.length > 0) {
            console.log("Login successful!");
            res.status(200).send('Login successful! Welcome ' + results[0].first_name);
        } else {
            // If no match is found
            console.log("Login failed: Invalid credentials");
            res.status(401).send('Invalid email or password');
        }
    });
});




app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});