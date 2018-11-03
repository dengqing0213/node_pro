const express = require('express');
const router = express.Router();
const mysql = require("./../mysql/index");
router.get('/', function(req, res, next) {
    mysql.find('kindpage',{},{id:0}).then((data) => {
        res.send(data);
    })
});

module.exports = router;
