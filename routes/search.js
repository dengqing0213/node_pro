const express = require('express');
const router = express.Router();
const mysql = require("./../mysql/index");
const url = require("url");
/* GET home page. */
router.get('/', function(req, res, next) {
	let {name}  = url.parse(req.url,true).query;
	console.log({name})
    mysql.find('testpage',{name:eval("/"+name+"/")}).then(data =>{
            res.send(data)
        })
});
module.exports = router;
