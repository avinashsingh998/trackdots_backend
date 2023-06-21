const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    contactNumber:{
        type:String,
        required:true
    },

    emailId:{
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

    userId:{
        type:String,
        required:false
    },

    closed:{
        type:Boolean,
        required:false,
        default:false
    },
    comment:{
        type:String,
        required:false,
        default:""
    }
})

const Ticket = mongoose.model("Ticket", ticketSchema)
module.exports = Ticket