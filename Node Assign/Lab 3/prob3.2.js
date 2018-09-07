var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');
//var mongodb = require('mongodb').MongoClient;

exp.get('/rest/api/load/:state',(req, res)=>{
    emparr=[]
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
    var raw = fs.readFileSync('emp.json')
    var data = JSON.parse(raw);
    for(var d of data){

        if (d.empAddress.state == req.params['state'] ){
            emparr.push(d)
        }
}
    res.status(201).send(emparr);
    console.log(emparr)

})
exp.use(cors()).listen(5000, ()=>console.log("RUNNING...."));
