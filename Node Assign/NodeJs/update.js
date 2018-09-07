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
    var Name = req.body.Name;
     var raw = fs.readFileSync('mobile.json')
    var data = JSON.parse(raw);
    for (var d of data) {

        if (d.mobId == 1002) {
            d.mobName = Name;

            res.send(d)
        }
    }
    fs.writeFileSync('mobile.json', JSON.stringify(data));


})

exp.use(cors()).listen(5000, ()=>console.log("RUNNING...."));

