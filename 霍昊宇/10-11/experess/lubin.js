//路由路柄

var express = require('express');
// 创建一个对象
var app = express();

/*
* 后续还有函数切记加next（）
* */

//使用多个回调函数
// app.get('/', function (req, res, next) {
//     console.log('hello')
//     next();
// }, function (req, res) {
//     res.send('hello too');
// });

// 使用回调函数数组处理路由：
// var cb0 = function (req, res, next) {
//     console.log('第一次');
//     next();
// }
//
// var cb1 = function (req, res, next) {
//     console.log('第二次');
//     next();
// }
//
// var cb2 = function (req, res) {
//     res.send('Hello from C!');
// }


// app.get('/', [cb0, cb1, cb2]);

//混合模式
var cb0 = function (req, res, next) {
    console.log('第一次');
    next();
}

var cb1 = function (req, res, next) {
    console.log('第2次');
    next();
}

app.get('/', [cb0, cb1], function (req, res, next) {
    console.log('第三次');
    next();
}, function (req, res) {
    res.send('Hello from D!');
});



var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});