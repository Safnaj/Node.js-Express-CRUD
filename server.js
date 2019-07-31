require('./modal/db');

const express = require('express');

var app = express();

app.listen(3000,() => {
    console.log('Express Server Started at port : 3000');
});