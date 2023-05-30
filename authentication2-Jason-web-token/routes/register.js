const express = require('express')
const router = express.Router()


const {route} = require('./root')
const handleUser = require('../controller/registerController')

router.post('/', handleUser)


module.exports = router