

const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({

    
    name:{
        type:String,
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    user_Id:{
        type:String,
        required:false
    },
    read:{
        type:Boolean,
        required:false,
        default:false
    }

})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback