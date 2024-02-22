const express = require('express')
const app = express() 
app.use(require('morgan')('dev'))
app.use(express.json())

const port = 3000 
app.listen(port, ()=> {
    console.log("the server is running")
}) 

