
const express = require('express');

const router =express.Router();

var MongoClient = require('mongodb').MongoClient;

const about_style = "/stylesheets/about.css";

const about_script= 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';

const url = 'mongodb://localhost:27017';

class Client {
    constructor(url,database,table_name){
        this.url =url;
        this.database=database;
        this.table_name=table_name;
        this.client = new MongoClient(this.url);       
    }

   async connection(){
    try{         
        this.dbs= await this.client.connect();   
        this.table= await this.dbs.db(this.database).collection(this.table_name); 
        //this.table= await this.dbs.db(this.database).collection(this.table_name); 
        // console.log(this.dbs['topology']['s']['state'])     
    }
    catch(error){
        console.error('Connection failed:', error);
        throw error; // Rethrow the error to handle it outside the class
    }      
      
    }


   async insertFunc(data){
    try{

        await this.connection();
        await this.table.insertOne(data);
    }catch{
        console.log(error)
    }finally{
        await this.dbs.close();
    }
   }



   async deleteFunc(data){
    try{
        await this.connection();
        await this.table.deleteMany(data);

    }catch(error){
        console.log(error);
    }
    finally{
        await this.dbs.close();
    }
   }
    
}

const client = new Client(url,'my_test','test');

client.deleteFunc({phone:55454564});



router.get('/',(req,res,next)=>{
res.render('login',{title:"Login" ,link:about_style,scripts:about_script});

});


router.post('/',async (req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    res.send("Inserted to db");
});
module.exports=router;