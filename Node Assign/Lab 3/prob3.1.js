var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
//var mongodb = require('mongodb').MongoClient;



exp.route('/rest/api/get').get((req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
   
    var dat = JSON.parse(fs.readFileSync('emp.json'));
 
             res.status(201).send(dat);
             console.log(dat);
})

exp.use(cors()).listen(4000, ()=>console.log("RUNNING...."));