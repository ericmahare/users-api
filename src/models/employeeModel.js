const mongoose = require('mongoose')
require('../db/dbConnection')
const validator = require('validator')

const schema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
    lowercase:true
  },
  lName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error("Email provided is invalid")
      }
    }
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
})

const Employee = mongoose.model('employee', schema)

module.exports =Employee
