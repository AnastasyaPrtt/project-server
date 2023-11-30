const { Router } = require('express')
const { create, register } = require('../controller/user/postUser')
const { login } = require('../controller/user/postUser')

const router = new Router()

router.post('/', create)
router.post('/registration', register)
router.post('/login', login)

module.exports = router
