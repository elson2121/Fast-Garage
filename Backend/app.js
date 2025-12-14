//import express module
const express = require('express');
// set up the listener port 
const app=express();
//create an listener port 
const port = 4000;
//create the simple get request handler 
app.get('/',(req,res)=>{
    res.send('Hello World!');

});

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});