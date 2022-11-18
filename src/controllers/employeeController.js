const Employee = require('../models/employeeModel')
exports.getAllEmployees = async(req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees)
  } catch(e) {
    res.send(e)
  }
}

exports.saveEmployee = async(req, res) => {
  console.log(req.body)
  try {
    const employee = new Employee(req.body)
    await employee.save()
    res.status(201).json(employee)
  }catch(e) {
    res.status(500).send(e)
  }
}
