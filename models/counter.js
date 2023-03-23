const mongoose = require('mongoose')

const counterSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  count: {
    type: Number,
    required: [true, 'Please pass initial value of counter'],
    default: 0,
  },
}, { timestamps: true })


module.exports = mongoose.model('Counter', counterSchema)
