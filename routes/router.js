const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')


router.get('/', controller.home)
router.get('/login', controller.login)
router.post('/login', controller.loginSubmit)
router.get('/logout', controller.logout)


module.exports = router