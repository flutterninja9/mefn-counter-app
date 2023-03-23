const router = require('express').Router()
const { getCurrentUser, register, login } = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, getCurrentUser)
router.post('/login', login)
router.post('/register', register)

module.exports = router
