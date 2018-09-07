
var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
var mongodb = require('mongodb').MongoClient;



exp.route('/rest/api/get').get((req, res)=>{

    var dat = JSON.parse(fs.readFileSync('emp.json'));
   mongodb.connect("mongodb://localhost:27017/Employee",function(err,DB){
         var DBO = DB.db('Employee');
        DBO.collection('employees').find({}).toArray(function(err,result){
            if (err) throw err;
            res.send(result)
            console.log("Document Displayed")
            console.log(result);
            DB.close();
 })
         
        });
    

    
})

exp.use(cors()).listen(4000, ()=>console.log("RUNNING...."));
