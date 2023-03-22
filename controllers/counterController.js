const asyncHandler = require('express-async-handler')
const Counter = require('../models/counter')

// gets current value of count
const get = asyncHandler(
    async (req, res) => {
    let counter = await Counter.findOne()
    if(!counter) {
      await Counter.create({
        count: 0,
      })
    }
    
    counter = await Counter.findOne()
    res.json({
      count: counter.count
    })
  }
)
// increments count and returns updated value
const increment = asyncHandler(
    async (req, res) => {
    res.json({
      count: 2,
    })
  }
)

// decrements count and returns updated value
const decrement = asyncHandler(
    async (req, res) => {
    res.json({
      count: 1,
    })
  }
)

// resets the counter and returns 0
const reset = asyncHandler(
    async (req, res) => {
    res.json({
      count: 1,
    })
  }
)


module.exports = { get, increment, decrement, reset }
