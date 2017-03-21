/**
 * Created by lxq on 2017/3/17.
 * 应用程序的启动入口文件
 */
//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser');
//创建app应用 =>  NodeJS Http.createServer();
var app = express();

//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回__dirname + '/public'对应下的文件
app.use('/public', express.static(__dirname + '/public'));


//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数，模板引擎的名称，同时也是模板文件的后缀
app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', './views');
/*注册所使用的模板引擎
* 第一个参数：必须是view engine
* 第二个参数：与app.engine()定义的模板引擎的名称，及第一个参数保持一致
* */
app.set('view engine','html');
//在开发过程中需要取消模板缓存
swig.setDefaults({cache:false});

//设置bodyParser  (!!!!不能放在下面三个ap.use()的后面，会出错undefined!!!!)
app.use( bodyParser.urlencoded({extended:true}));

//根据不同的功能划分模块
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/',require('./routers/main'));


/*
* 首页
* req request对象
* res response对象
* next 函数
* */
/*app.get('/',function(req, res, next){
    //res.send('<h1>欢迎光临我的博客</h1>');


    * 读取views目录下的指定文件，解析并返回给客户端
    * 第一个参数：表示模板的文件，相对于views目录 views/index.html
    * 第二个参数：传递给模板使用的数据

    res.render('index');
});*/
mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        app.listen(8081);
    }
});


