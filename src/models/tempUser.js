
const mongoose = require('mongoose')

const tempuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }, 
   
  otp:{ 
    type:Number,
    required:true
  }
})

// Create and export the User model
const TempUser  = mongoose.model('TempUser', tempuserSchema)
module.exports = TempUser
