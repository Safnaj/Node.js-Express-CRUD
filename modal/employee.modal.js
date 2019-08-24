const mongoose = require('mongoose');

//Creating Mongo database schema
var employeeSchema = new mongoose.Schema({

    fullName :{
        type: String,
        required: 'This field is Required' //Validating Required
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
