const express = require('express')
const router = express.Router()

const gogisRouter = require('./gogis')
router.use('/gogis', gogisRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
