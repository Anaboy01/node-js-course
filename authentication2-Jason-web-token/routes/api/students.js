const express = require('express')
const router = express.Router()
const path = require('path')

const studentsController = require('../../controller/studentController')
const verifyJwt = require('../../middleware/verifyJWT')



router.route('/')
.get(verifyJwt, studentsController.getAllStudents)
.post(studentsController.createNewStudent)
.put(studentsController.updateStudent)
.delete(studentsController.deleteStudent)
router.route('/:id')
.get(studentsController.getStudent)



module.exports = router