/**
 * Created by lxq on 2017/3/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send(' 首页 ');
});

module.exports = router;