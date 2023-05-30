const express = require('express')
const router = express.Router()


const registerUser = require('../controller/registrationController')

router.post('/', registerUser)


module.exports = router