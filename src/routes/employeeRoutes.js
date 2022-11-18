const express = require('express')
const {getAllEmployees, saveEmployee} = require('../controllers/employeeController')
const router = express.Router()

router
  .route('/employees')
  .get(getAllEmployees)
  .post(saveEmployee)
module.exports = router
