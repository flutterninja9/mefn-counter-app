const mongoose = require('mongoose')

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill in name'],
  },
  email: {
    type: String,
    required: [true, 'Please fill in email'],
  },
  password: {
    type: String,
    required: [true, 'Please fill in password'],
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userModel)
