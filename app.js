const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const handleHomepage = require('./controllers/indexController')
const counterRoutes = require('./routes/counterRoutes')

const port = process.env.PORT
const app = express()
app.use(express.static('public'))

app.get('/', handleHomepage)
app.use('/api/counter', counterRoutes)


app.listen(port, () => {
  console.log(`Server started at port: ${port}`.magenta);
})
