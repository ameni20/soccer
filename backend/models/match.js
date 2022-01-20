const mongoose = require('mongoose');
// define model attributes
const matchSchema = mongoose.Schema({
    teamOne:String,
    scoreOne:String,
    teamTwo:String,
    scoreTwo:String,
    image:String // attribute for image
});
// DB Model name 
const match = mongoose.model('Match', matchSchema);
// export match variable
module.exports = match;