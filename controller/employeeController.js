const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

//Routes  
router.get('/',(req,res)=>{
    res.render("employees/addOrEdit",{
        viewTitle : "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
});

//Employee List
router.get('/list',(req,res)=>{
    Employee.find((err,docs)=> {
        if(!err){
            res.render("employees/list",{
                list: docs
            });
        }else{
            console.log("Error in Retrieving Employee List : "+err);
        }
    });
});


//Insert Function
function insertRecord(req,res){
     var employee = new Employee(); 
     employee.fullName = req.body.fullName;
     employee.email = req.body.email;
     employee.mobile = req.body.mobile;
     employee.city = req.body.city;
     employee.save((err, doc)=>{
         if(!err)
            res.redirect('employee/list');
         else{
             if(err.name == 'ValidationError'){
                 handleValidationError(err,req.body);
                 res.render("employees/addOrEdit",{
                     viewTitle: "Insert Employee",
                     employee: req.body
                 })
             }
             console.log('Error in Inserting Record : '+err);
         }   
     }); 
}

function handleValidationError(err,body){
    for(field in err.errors)
    {
        switch(err.errors[field].path){
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;
