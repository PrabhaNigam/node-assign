var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
var mongodb = require('mongodb').MongoClient;


exp.use(parser.json())
exp.route('/add').post((req, res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
   
    var dat = JSON.parse(fs.readFileSync('emp.json'));


   mongodb.connect("mongodb://localhost:27017/Employee",function(err,DB){
         var DBO = DB.db('Employee');
         var Obj = req.body;
       
        DBO.collection('employees').insertOne(Obj,true,function(err,result){
            if (err) throw err;
            res.send(result)
            console.log("1 Document inserted")
            console.log(result);
            DB.close();
 })
         
        });
    

    
})

exp.use(cors()).listen(4000, ()=>console.log("RUNNING...."));