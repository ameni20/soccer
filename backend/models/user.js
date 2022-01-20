const mongoose = require('mongoose');
// define model attributes
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    tel:String 
});
// DB Model name 
const user = mongoose.model('User', userSchema);
// export match variable
module.exports = user;