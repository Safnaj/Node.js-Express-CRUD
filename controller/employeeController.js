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
}

module.exports = router;