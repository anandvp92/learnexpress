const express = require('express');

const router =express.Router();

const link = "/stylesheets/about.css";


router.get('/',(req,res,next)=>{

res.render('login',{title:"Login" ,link:link});

});


router.post('/',(req,res,next)=>{
console.log(req.body.username);
res.render('login',{result:req.body.username,link:link});
})

module.exports=router;