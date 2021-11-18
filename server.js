const express = require('express');
const app = express();
app.use(express.json());


const dog = require('./routes/dogs');
app.use('/', dog);

app.listen('3040', (req, res)=>{
    console.log('Server is on....');
})