var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
var mongodb = require('mongodb').MongoClient;


exp.use(parser.json())
exp.route('/update/:name').put((req, res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
   var a = req.params['name']
    var dat = JSON.parse(fs.readFileSync('emp.json'));


   mongodb.connect("mongodb://localhost:27017/Employee",function(err,DB){
         var DBO = DB.db('Employee');
         var query = {empName:a}
         var  up = {$set:{'empAddress.city':"Ratlam"}}
        DBO.collection('employees').updateOne(query,up,function(err,result){
            if (err) throw err;
            res.send(result)
            console.log("Document updated")
            console.log(result);
            DB.close();
 })
         
        });
    

    
})

exp.use(cors()).listen(4000, ()=>console.log("RUNNING...."));