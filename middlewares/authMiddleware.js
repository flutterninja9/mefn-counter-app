const express = require('express')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { use } = require('../routes/counterRoutes')

const authMiddleware = asyncHandler(
  async (req, res, next) => {
    let token
    if(req.headers.authorization && 
      req.headers.authorization.startsWith('Bearer')) {
        try {
          token = req.headers.authorization.split(' ')[1]
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
          req.user = await User.findById(decodedToken.id).select('-password')
          next()
        }
        catch(err) {
          console.log(err);
          res.status(401)
          throw new Error('Not authorized')
        }
      }

    if(!token) {
      res
      .status(401)

      throw new Error('No token found!')
    }
  }
)

module.exports = { authMiddleware }
