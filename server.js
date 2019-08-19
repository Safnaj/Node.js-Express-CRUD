require('./modal/db');

//Server Configurations
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const employeeController = require('./controller/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.set('vies',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname: 'hbs' , defaultLayout: 'mainLayout', layoutDir: __dirname+'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,() => {
    console.log('Express Server Started at port : 3000');
});

app.use('/employee',employeeController);
