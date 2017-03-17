/**
 * Created by lxq on 2017/3/17.
 */
var mongoose = require('mongoose');

//用户的表结构
module.exports = new mongoose.Schema({
    username: String,
    password: String
});