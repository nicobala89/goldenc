// Main Variables
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create a new express application instance
const app = express();
const port = process.env.PORT || 5000;

// Use the body parser middleware for post requests
app.use (bodyParser.urlencoded({extended: false}));
app.use (bodyParser.json());


// MySQL configuration
const pool = mysql.createPool({ 
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'golden_c'
});

//Get all the Iformation from the database
app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) { throw err; }
        console.log(`Connected as id: ${connection.threadId}`);
    });
});


// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`));