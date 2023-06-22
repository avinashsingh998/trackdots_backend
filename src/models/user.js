
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  role:{
    type:String,
    required:true
  },

  _id:{
    type:String,
    required:true
  },
   
  imageUrl:{
    type:String,
    required:false
  }
})

// Create and export the User model
module.exports = mongoose.model('User', userSchema)
