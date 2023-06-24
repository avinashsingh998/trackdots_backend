const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  heritage: {
    type: Boolean,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  expenses: {
    type: String,
    required: true,
  },
  map_link: {
    type: String,
    required: true,
  },
})

const Package = mongoose.model('Package', packageSchema)

module.exports = Package
