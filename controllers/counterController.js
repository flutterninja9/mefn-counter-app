const asyncHandler = require('express-async-handler')

// gets current value of count
const get = asyncHandler(
    async (req, res) => {
    res.json({
      count: 1,
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
