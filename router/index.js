const { Router } = require('express')
const userRouter = require('./user.routes')
const router = new Router()

router.use('/user', userRouter)

module.exports = router
