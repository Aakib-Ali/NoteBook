const mongoose =require('mongoose')
const { Schema }=mongoose
const NoteSchema =new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        default:"general"
    },
    dete:{
        type:Date,
        default:Date.now
    }
});

module.exports =mongoose.model('notes',NoteSchema);