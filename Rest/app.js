const express = require('express');
const app = express();

app.use(express.json());

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


const product = require('./routes/ProductRoute');

app.use("/api/v2",product);

module.exports = app;