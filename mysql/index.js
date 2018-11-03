const MongoClient = require("mongodb").MongoClient;
const CONNECT_URL = "mongodb://localhost:27017/vuepro";
module.exports = {
    //这种是函数形式//查询数据
    find(collectionName,whereObj,showObj){
       return new Promise((resolve,reject) => {
           MongoClient.connect(CONNECT_URL,(err,db) =>{
               if(err) throw err;
               console.log("db connect success");
               db.collection(collectionName).find(whereObj,showObj).toArray((err,data) =>{
                   if(err) throw err;
                   //成功执行的代码
                   resolve(data);
                   //查询完毕之后,一定要关闭数据库
                   db.close();
               })
           });
       })
    },
    //封装一个删除的方法,还是采用promise的方法,参数type代表删除一个还是多个,不传默认删除一个
    delete(collectionName,deleteObj,type){
        type = type || "deleteOne";
        return new Promise((resolve,reject) =>{
            MongoClient.connect(CONNECT_URL,(err,db) => {
                if(err) throw err;
                console.log("db connect success");
                db.collection(collectionName)[type](deleteObj,(err) => {
                    if(err) throw err;
                    // console.log('2222222')
                    resolve();
                    //关闭数据库
                    db.close();
                })
            })
        })
    },
    //更新数据,将放入回收站的数据的字段recovery改为0;需要四个参数:
    //数据集合;查询条件,更新什么,type(更新一条还是多条)
    update(collectionName,whereObj,updateObj,type){
        console.log(type);
        type = type || "updateOne";
        return new Promise((resolve,reject) =>{
            MongoClient.connect(CONNECT_URL,(err,db) => {
                if(err) throw err;
                console.log("db connect success");
                db.collection(collectionName)[type](whereObj,updateObj,(err) => {
                    resolve();
                    db.close();
                })
            })
        })
    },
    //给数据库中插入数据(插入到哪个集合中,插入的对象)
    insert(collectionName,insertObj){
        return new Promise((resolve,reject) => {
            MongoClient.connect(CONNECT_URL,(err,db) => {
                if(err) throw err;
                console.log("db connect success");
                db.collection(collectionName).insert(insertObj,(err) => {
                    if(err) throw err;
                    resolve();
                    db.close();
                })
            })
        })
    },
    sort(collectionName,whereObj,showObj,sortObj){
        return new Promise((resolve,reject) => {
            MongoClient.connect(CONNECT_URL,(err,db) =>{
                if(err) throw err;
                console.log("db connect success");
                db.collection(collectionName).find(whereObj,showObj).sort(sortObj).toArray((err,data) =>{
                    if(err) throw err;
                    //成功执行的代码
                    resolve(data);
                    //查询完毕之后,一定要关闭数据库
                    db.close();
                })
            });
        })
    },
    distinct(collectionName,distinctStr){
        return new Promise((resolve,reject) => {
            MongoClient.connect(CONNECT_URL,(err,db) =>{
                if(err) throw err;
                console.log("db connect success");
                db.collection(collectionName).distinct(distinctStr,(err,data) =>{
                    if(err) throw err;
                    resolve(data);
                    db.close()
                })
            });
        })
    }
};