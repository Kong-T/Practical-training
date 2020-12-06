{/* <script type="text/javascript">
        $(function () {
            $('#btn').click(function (e) {
                window.location.href = "..\..\web\bord&notice\notice1.html";
            });
        });
</script> */}

//引入express框架
const express = require('express')

//引入路径处理模块
const path = require('path')

//创建web服务器
const app = express();


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