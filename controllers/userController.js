const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

// GET Current signed in user details
const getCurrentUser = asyncHandler(
  async (req, res) => {
    res.json(req.user)
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

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    
    
    const user = await User.create({
      name,
      email,
      password : hashedPassword,
    })

    res.json({
      id : user.id,
      name : user.name,
      email : user.email,
      token: generateToken(user.id),
    })
  }
)

// Login User
const login = asyncHandler(
  async (req, res) => {
    const { email, password } = req.body

    // Check if all the fields are passed
    if(!email || !password) {
      res
      .status(400)

      throw new Error('Please pass in email and password')
    }

    // Check if user already exists
    const user = await User.findOne({ email })
    const passwordsMatch = await bcrypt.compare(password, user.password)
    
    if(user && passwordsMatch) {
      res
      .status(200)
      .json({
        id : user.id,
        name : user.name,
        email : user.email,
        token: generateToken(user.id),
    })
    } else {
      res
      .status(400)

      throw new Error('Invalid credentials')
    }
  }
)

function generateToken(id) {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { 'expiresIn': '30d' },
  )
}

module.exports = { getCurrentUser, register, login }
