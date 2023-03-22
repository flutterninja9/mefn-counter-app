const router = require('express').Router()
const { get, increment, decrement, reset } = require('../controllers/counterController')

router.get('/', get)
router.get('/increment', increment)
router.get('/decrement', decrement)
router.get('/reset', reset)

module.exports = router
