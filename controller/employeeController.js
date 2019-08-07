const express = require('express');
var router = express.Router();

//Routes

router.get('/',(req,res)=>{
    res.render("employees/addOrEdit",{
        viewTitile : "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    res.render("employees/addOrEdit",{
        viewTitile : "Insert Employee"
    });
});

module.exports = router;