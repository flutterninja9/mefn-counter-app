const router = require('express').Router()
const { get, increment, decrement, reset } = require('../controllers/counterController')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, get)
router.get('/increment', authMiddleware, increment)
router.get('/decrement', authMiddleware, decrement)
router.get('/reset', authMiddleware, reset)

module.exports = router
