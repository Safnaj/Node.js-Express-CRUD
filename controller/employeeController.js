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

//Post
router.post('/',(req, res)=>{
    if(req.body._id == '')
        insertRecord(req, res); //Function Written below
    else
        updateRecord(req, res);
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

//Select By ID
router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err, doc)=>{
        if(!err){
            res.render("employees/addOrEdit",{
                viewTitle: "Update Employee",
                employee: doc
            });
        }
    });
});

//Delete Route
router.get('/delete/:id', (req, res)=>{
    Employee.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            res.redirect('/employee/list'); //Redirect After Delete
        }
        else{
            console.log('Error in Employee Delete '+err);
        }
    })
})


//Insert Function
function insertRecord(req,res){
     var employee = new Employee(); 
     employee.fullName = req.body.fullName;
     employee.email = req.body.email;
     employee.mobile = req.body.mobile;
     employee.city = req.body.city;
     employee.save((err, doc)=>{
         if(!err)
            res.redirect('employee/list'); //Redirect After Insert
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

//Update Function
function updateRecord(req, res){
    Employee.findOneAndUpdate({ _id: req.body._id},req.body,{new: true},(err, doc)=>{
        if(!err){
            res.redirect('employee/list'); //Redirect After Update
        }else{
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employees/addOrEdit",{
                    viewTitle: 'Update Employee',
                    employee: req.body
                });
            }
            else{
                console.log('Error During Record Update : '+err);
            }
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
