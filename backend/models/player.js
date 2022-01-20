const mongoose = require('mongoose');
// define model attributes
const playerSchema = mongoose.Schema({
    name:String,
    poste:String,
    image :String,
    
});
// DB Model name 
const player = mongoose.model('Player', playerSchema);
// export match variable
module.exports = player;

// var array = [12,16,18,90];
// var s =0;
// for (let index = 0; index < array.length; index++) {
//     s= s+ T[index];
// }
// return s;