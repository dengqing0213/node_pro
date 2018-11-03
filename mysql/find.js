const MongoClient = require("mongodb").MongoClient;
const CONNECT_URL = "mongodb://localhost:27017/vuepro";
//连接数据 ,检查数据库连接成功与否,里面需要一个回调函数来了解连接是否成功
MongoClient.connect(CONNECT_URL,(err,db) =>{
    if(err) throw err;
    console.log("db connect success");
    db.collection("homepage").find({},{_id:0,title:1}).toArray((err,data) =>{
        if(err) throw err;
        console.log(data);
    })
});