const express = require('express');
const router = express.Router();
const mysql = require("./../mysql/index");
const url = require("url");
/* GET home page. */
router.get('/', function(req, res, next) {
	let {gid} = url.parse(req.url,true).query;
	console.log({gid})
    mysql.find('testpage',{gid},{id:0}).then((data) => {
        res.send(data);
    })
});
module.exports = router;
