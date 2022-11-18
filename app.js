const express = require('express')
const employeeRouter = require('./src/routes/employeeRoutes')
const app = express()

// middlewares
app.use(express.json())
app.use(employeeRouter)
const port =  process.env.PORT || 8000
app.listen(port, ()=> {
  console.log(`Listening to port ${port}`)
})