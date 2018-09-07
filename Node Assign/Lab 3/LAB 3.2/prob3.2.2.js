var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
var mongodb = require('mongodb').MongoClient;


exp.use(parser.json())
exp.route('/fetch/:state').get((req, res)=>{
   var a = req.params['state']
   // var dat = JSON.parse(fs.readFileSync('emp.json'));
   mongodb.connect("mongodb://localhost:27017/Employee",function(err,DB){
         var DBO = DB.db('Employee');
         var query = {'empAddress.state':a}
        DBO.collection('employees').find(query).toArray(function(err,result){
            if (err) throw err;
            res.send(result)
            console.log("Document Displayed")
            console.log(result);
            DB.close();
 })
         
        });
})
exp.use(cors()).listen(4000, ()=>console.log("RUNNING...."));