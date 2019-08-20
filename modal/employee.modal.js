const mongoose = require('mongoose');

//Creating Mongo database schema
var employeeSchema = new mongoose.Schema({

    fullName :{
        type: String,
        required: 'This field is Required'
    },
    email :{
        type: String
    },
    mobile :{
        type: String
    },
    city :{
        type: String
    }
    
}) ;

mongoose.model('Employee',employeeSchema);

//Video 41:00
//Havent Implemented Validations
