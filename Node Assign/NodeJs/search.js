var http = require('http');
var express = require('express');
var exp = express();
var parser = require('body-parser')
var fs = require('fs');
var cors = require('cors');

exp.get('/rest/api/load/:mobPrice', (req, res) => {
    emparr = []
    var raw = fs.readFileSync('mobile.json')
    var data = JSON.parse(raw);
    for (var d of data) {

        if (d.mobPrice >= 10000 && d.mobPrice <= 50000) {
            emparr.push(d)
        }
    }
    res.status(201).send(emparr);
    console.log(emparr)
})
exp.use(cors()).listen(5000, () => console.log("RUNNING...."));
