//导入包
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var session = require('express-session') //????

//引入路由
var router = require('./router')

//开放目录
//path.join(__dirname,'./public/')   表示将相对路径改为绝对路径
//path  是一个模块  _dirname 是获取文件目录的路径  join  可以自动加斜杠
//_filename 获取文件的路径  动态获取
//_dirname 获取文件目录所有在的路径  动态获取
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

//加载模板引擎