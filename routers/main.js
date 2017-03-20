/**
 * Created by lxq on 2017/3/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    /*!!!!!!!!!!  res.render(' main/index ');有空格也不行呢 !!!!!!!!!*/
    res.render('main/index');
});

module.exports = router;