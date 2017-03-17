/**
 * Created by lxq on 2017/3/17.
 */
var mongoose = require('mongoose');
var userSchema = require('../scheams/users');

module.exports= mongoose.model('User', userSchema);
