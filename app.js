/**
 * Created by lxq on 2017/3/17.
 * 应用程序的启动入口文件
 */
//加载express模块
var express = require('express');
//创建app应用 =>  NodeJS Http.createServer();
var app = express();

/*
* 首页
* req request对象
* res response对象
* next 函数
* */
app.get('/',function(req, res, next){
    res.send('<h1>欢迎光临我的博客</h1>');
});

app.listen(8081);


