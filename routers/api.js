/**
 * Created by lxq on 2017/3/17.
 */
var express = require('express');
var router = express.Router();

//用户注册
router.post('/user/register',function(req,res,next){
    console.log(req.body);
    //console.log('success');
});

module.exports = router;