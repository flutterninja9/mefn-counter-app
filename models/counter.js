const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
  count: {
    type: Number,
    required: [true, 'Please pass initial value of counter'],
    default: 0,
  },
}, { timestamps: true })


module.exports = mongoose.model('Counter', counterSchema)
