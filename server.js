require('./modal/db');

const express = require('express');
const path = require('path');
const employeeController = require('./controller/employeeController');

var app = express();

app.set('vies',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname: 'hbs' , defaultLayout: 'mainLayout', layoutDir: __dirname+'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,() => {
    console.log('Express Server Started at port : 3000');
});

app.use('/employee',employeeController);