const router = require('express').Router()
const { getCurrentUser, register, login } = require('../controllers/userController')

router.get('/', getCurrentUser)
router.post('/login', login)
router.post('/register', register)

module.exports = router
