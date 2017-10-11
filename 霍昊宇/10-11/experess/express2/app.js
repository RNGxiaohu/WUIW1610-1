const express = require('express');
var app = express();

// 路由模块
var home = require('./routers/home'); //导入模块
var news = require('./routers/news');
var product = require('./routers/product');

app.use('/',home);   //调用模块
app.use('/news',news);
app.use('/product',product);

var server = app.listen(2000,'localhost',function () {
    console.log("当前项目地址是:http://%s:%s",server.address().address,server.address().port);
})
