var express = require('express');
// 创建一个对象
var app = express();

//当浏览器发起get请求，并且请求地址 / 时候触发这个操作
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// 监听一个端口
var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});