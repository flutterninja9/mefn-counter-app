const asyncHandler = require('express-async-handler')
const Counter = require('../models/counter')

// gets current value of count
const get = asyncHandler(
    async (req, res) => {
    let counter = await Counter.findOne({ user: req.user.id })
    if(!counter) {
      await Counter.create({
        user: req.user.id,
        count: 0,
      })
    }
    
    counter = await Counter.findOne({ user: req.user.id })
    res.json({
      count: counter.count
    })
  }
)

// increments count and returns updated value
const increment = asyncHandler(
    async (req, res) => {
      let counter = await Counter.findOne({ user: req.user.id })
      if(!counter) {
        await Counter.create({
          user: req.user.id,
          count: 0,
        })
      }

      counter = await Counter.findOneAndUpdate({ user: req.user.id }, { 
        $inc: { count: 1 } 
     }, {new: true })

      counter = await Counter.findOne({ user: req.user.id })
      res.json({
        count: counter.count
      })
  }
)

// decrements count and returns updated value
const decrement = asyncHandler(
    async (req, res) => {
      let counter = await Counter.findOne({ user: req.user.id })
      if(!counter) {
        await Counter.create({
          user: req.user.id,
          count: 0,
        })
      }
      
      counter = await Counter.findOneAndUpdate({ user: req.user.id }, { 
        $inc: { count: -1 } 
     }, {new: true })

      counter = await Counter.findOne({ user: req.user.id })
      res.json({
        count: counter.count
      })
  }
)

// resets the counter and returns 0
const reset = asyncHandler(
    async (req, res) => {
      let counter = await Counter.findOne({ user: req.user.id })
      if(!counter) {
        await Counter.create({
          user: req.user.id,
          count: 0,
        })
      }
      
      counter = await Counter.findOneAndUpdate({
        user: req.user.id,
        count: 0
      })
      
      counter = await Counter.findOne({ user: req.user.id })
      res.json({
        count: counter.count
      })
  }
)


module.exports = { get, increment, decrement, reset }
