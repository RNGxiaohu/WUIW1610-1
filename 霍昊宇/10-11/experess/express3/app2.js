const express = require('express');
const fs = require('fs');
var app = express();

//只有路径/list 才能访问到
app.use('/list',function (req,res,next) {
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log2.txt',t+"\n",function (err) {
        if(err) throw err ;
    });
    next();
})
app.get('/',function (req,res) {
    res.send("shouye")
})
app.get('/list',function (req,res) {
    res.send("shouye liebiao")
})


var server = app.listen(2000,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})