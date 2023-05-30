// booking.js (model)
const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  remark: {
    type: String,
    default: ""
  }
});

// Create and export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
