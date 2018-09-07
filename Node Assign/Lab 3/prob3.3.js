var http = require('http');
var express = require('express');
var exp = express();
var parser=require('body-parser')
var fs = require('fs');
var cors = require('cors');

exp.use(parser.json())
exp.route('/update').put((req,res)=>{
console.log(req.body)
    var id= req.body.empId;
    var city = req.body.city;
     var raw = fs.readFileSync('emp.json')
    var data = JSON.parse(raw);
    for (var d of data) {

        if (d.empId == id) {
            d.empAddress.city = city;

            res.send(d)
        }

    }
    fs.writeFileSync('emp.json', JSON.stringify(data));


})

exp.use(cors()).listen(5000, ()=>console.log("RUNNING...."));

