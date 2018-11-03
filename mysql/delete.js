//要删除数据库的东西,首先肯定要连接数据库
const MongoClient = require("mongodb").MongoClient;
const CONNECT_URL = "mongodb://localhost:27017/vuepro";
MongoClient.connect(CONNECT_URL,(err,db) => {
   if(err) throw  err;
   //在新的窗口打开mysql 使用命令:node delete.js 回车
   console.log("db connect success");
   //找到数据所在的集合
        db.collection("homepage").deleteOne({},{id:"1235"},(err,result) =>{
            if(err) throw  err;
            console.log("delete success");
        })
});