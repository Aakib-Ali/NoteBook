const mongoose = require('mongoose');
const { Schema}= mongoose;

//create table in mongo with name User
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type:String,
        unique:true,  //email should be unique for every user.
        required:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User =mongoose.model('user',UserSchema);
User.createIndexes;
module.exports =User;
