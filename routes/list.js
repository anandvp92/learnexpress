const express = require('express');

const router = express.Router();

const list = ['anand','arun','anu'];

router.get('/',async (req,res,next)=>{
await res.render('list',{list});
});


module.exports=router;