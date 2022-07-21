const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.get('/', (req,res) => {
    res.send('this is express server')
});

app.listen(port, () => { 
    console.log(`listening to the port ${port}`);
})