//路由路径

var express = require('express');
// 创建一个对象
var app = express();

//?前的一位可有可无：acd 和 abcd
app.get('/ab?cd', function(req, res) {
    res.send('匹配成功');
});

// +一个或者多个b（前一位）：abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
    res.send('匹配成功');
});

// * 中间添加任意多个任意字符：abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
    res.send('匹配成功');
});

//  /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
    res.send('匹配成功');
});


var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});