const express = require('express');
const { Db } = require('mongodb');

const router =express.Router();


var MongoClient = require('mongodb').MongoClient;


const link = "/stylesheets/about.css";

const scripts= 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';

let result ;

router.get('/',(req,res,next)=>{

res.render('login',{title:"Login" ,link:link,scripts:scripts});


});


router.post('/',async (req,res,next)=>{
    let username = req.body.username;
    let dbo = await MongoClient.connect('mongodb://localhost:27017');
    await dbo.db('my_test').collection('test').insertOne({name:username,password:req.body.password});
    await dbo.close();
    res.send('inserted');

});
module.exports=router;