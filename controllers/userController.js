const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// GET Current signed in user details
const getCurrentUser = asyncHandler(
  async (req, res) => {
    res.json({
      name: 'Some user',
      email: 'some@gmail.com',
      action: 'Get current user',
      password: 'some-password',
    })
  }
)

// Register User
const register = asyncHandler(
  async (req, res) => {
    const { name, email, password } = req.body

    // Check if all the fields are passed
    if(!name || !email || !password) {
      res
      .status(400)

      throw new Error('Please pass in name email and password')
    }

    // Check if user already exists
    if(await User.findOne({ email })) {
      res
      .status(400)

      throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(salt, password)
    
    const user = await User.create({
      name,
      email,
      password : hashedPassword,
    })

    res.json({
      id : user.id,
      name : user.name,
      email : user.email,
    })
  }
)

// Login User
const login = asyncHandler(
  async (req, res) => {
    const { name, email, password } = req.body
    res.json({
      name: name,
      email: email,
      action: 'Login',
      password: password,
    })
  }
)

module.exports = { getCurrentUser, register, login }
