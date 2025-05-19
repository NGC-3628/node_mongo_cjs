const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true, 

    }
});
//idk what does model mean tho. 
module.exports = mongoose.model('User', userSchema);