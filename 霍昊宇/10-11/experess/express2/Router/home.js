// 1.先导入express
var express = require('express');
var router = express.Router();
router.route('/')
    .get(function (req,res) {
        res.send("GET home");
    })
    .post(function (req,res) {
        res.send("POST home");
    })
module.exports=router;