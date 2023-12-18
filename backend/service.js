const express=require('express')
const cors=require('cors')
const controllerRoute = require('./routes/controllerRoute')
const connect = require('./config/connectDB')
const app=express()
const port=5000


app.use(express.json())
app.use(cors())
app.use('/liste',controllerRoute)
connect()




app.listen(port,(err)=>{
    err?console.log(err):console.log(`Yes, Successful ${port}`)
})