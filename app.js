//引入express框架
const express = require('express')

var express2 = require('express');

var app2 = express2();

var port2 = 8080;



//引入路径处理模块
const path = require('path')

//创建web服务器
const app = express();

//cors跨域
var cors = require("cors");
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//要解析name=zhangshan&age=14这种格式的参数
app.use(bodyParser.json());//解析json格式的参数


//静态资源访问服务器功能
app.use(express.static(path.join(__dirname, 'public')));

//设置路由，服务器端的请求方式和地址要和客户端保持一致
app.get('/first', (req, res) => {
    res.send('Hello Ajax');  //请求处理函数 内容自己写
});
//服务器端向客户端发送一个对象
app.get('/responseData', (req, res) => {
    res.send({ "name": "zs" });
});
app.get('/get', (req, res) => {
    //服务器端如何接收客户端传过来的数据？req.query 返回一个对象，对象中存储客户端传过来的请求参数
    var param = req.query;
    res.send(param)
});

//登录页面 login
app.post('/login', (req, res) => {
    res.send(req.body);//客户端传来的参数用req.body接收
});
//填报选题页面
app.post('/submit_topic', (req, res) => {
    res.send(req.body);//客户端传来的参数用req.body接收
});
//监听端口
app.listen(port2);

//控制台提示输出
console.log('服务器启动成功')