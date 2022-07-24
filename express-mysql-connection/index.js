require("dotenv").config();
const express = require("express");
const mysql = require('mysql2')

const app = express();

app.listen(3000, () => console.log("Server is running"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: 'nagarrodbcon'
})

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!")
});

connection.query('create table nagarrodbcon.students (data varchar(255));',(err)=>{
    if(err) throw err;
})

connection.end();