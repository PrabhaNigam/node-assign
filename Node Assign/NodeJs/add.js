var http = require('http');
var express = require('express');
var exp = express();
var parser = require('body-parser')
var fs = require('fs');
var cors = require('cors');

exp.use(parser.json())
exp.route('/add').post((req, res) => {
    var raw = fs.readFileSync('mobile.json')
    var data = JSON.parse(raw);
    console.log(req.body)
    var obj = req.body;
    console.log(obj);
    data.push(obj)
    res.send(data)
    fs.writeFileSync('mobile.json', JSON.stringify(data));
})
exp.use(cors()).listen(5000, () => console.log("RUNNING...."));
