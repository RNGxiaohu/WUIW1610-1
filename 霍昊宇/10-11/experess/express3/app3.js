// 多个中间件的使用
const express = require('express');
const fs = require('fs');
var app = express();

/*
* 10000
* 6000
* 4000
* 2000
* 1000
* 500
*
*/
app.use(function (req,res,next) {
    //10000
    req.money=10000;
    console.log('中央');
    next();
})
app.use(function (req,res,next) {
    //6000
    req.money=req.money-4000;
    console.log('省');
    next();
})
app.use(function (req,res,next) {
    //4000
    req.money=req.money-2000;
    console.log('市');
    next();
})
app.use(function (req,res,next) {
    //2000
    req.money=req.money-2000;
    console.log('县');
    next();
})
app.use(function (req,res,next) {
    //1000
    req.money=req.money-1000;
    console.log('乡');
    next();
})
app.use(function (req,res,next) {
    //1000
    req.money=req.money-500;
    console.log('村');
    next();
})

app.get('/',function (req,res) {
    res.send(req.money+'');
})

var server = app.listen(2000,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})