//连接数据库
//1.打开数据库连接池 2.创建一个collection插入数据
//3.安装mongodb模块  版本@2 4.导入mongodb模块  5.连接

//连接客户端
const MongoClient = require("mongodb").MongoClient;
//sz1805客户端地址
const CONNECT_URL = "mongodb://localhost:27017/vuepro";
//连接数据 ,检查数据库连接成功与否,里面需要一个回调函数来了解连接是否成功
MongoClient.connect(CONNECT_URL,(err,db) =>{
    if(err) throw err;
    console.log("db connect success");

});