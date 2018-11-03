const express = require('express');
const router = express.Router();
const mysql = require("./../mysql/index");
/* GET home page. */
router.get('/', function(req, res, next) {
    mysql.find('homepage',{},{id:0}).then((data) => {
        res.send(data);
    })
});
module.exports = router;
