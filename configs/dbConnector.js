const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const connect = asyncHandler(
  async () => {
    const connUrl = process.env.MONGODB_CONN_URL
    try {
      const res = await mongoose.connect(connUrl)
      console.log(`MONGODB Connected with url ${connUrl}`);
    }
    catch(err) {
      console.log(err.red);
      process.exit(1)
    }
  }
)


module.exports = { connect }
