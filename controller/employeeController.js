const express = require('express');
var router = express.Router();
const mongoose = require('mangoose');
const Employee = mongoose.model('Employee');

//Routes
  
router.get('/',(req,res)=>{
    res.render("employees/addOrEdit",{
        viewTitile : "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
});

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
             console.log('Error in Inserting Record : '+err);
         }   
     }); 
}

router.get('/list',(req,res)=>{
    res.json('from list');
});

module.exports = router;