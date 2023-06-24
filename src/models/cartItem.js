const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    package:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Package",
        required:true
    },

    price: {
        food:Number,

        basic: {
          type: Number,
          required: true
        },
        other:Number,

        gst: {
          type: Number,
          required: true
        },
        othertax: {
          type: Number,
          required: true
        }
      },

      maleCount:{
        type:Number,
        required:true
    },

    femaleCount:{
        type:Number,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    userId:{
        type:String,
        required:true
    }

})

const CartItem = mongoose.model('CartItem',cartItemSchema)
module.exports = CartItem