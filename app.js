// 项目入口文件

// 导入 express模块
var express = require('express');
// 创建 express的服务器实例
var app = express();


// 托管静态资源文件
app.use('/node_modules', express.static('node_modules'));
// 设置模板引擎
app.set('view engine', 'ejs');
// 模板页面的存放路径
app.set('views', './views');


// 导入路由文件
var indexRouter = require('./router/indexRouter.js');
// 注册路由
app.use(indexRouter);


// 渲染首页
// app.get('/', (req, res) => {
//     res.render('index');
// })


// 调用 app.listen方法, 指定端口号并启动web服务器
app.listen(3001, function() {
    console.log( 'Express server running at http://127.0.0.1:3001' );
})
