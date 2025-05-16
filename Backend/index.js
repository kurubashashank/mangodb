const express =require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const studentModel=require('./models/student')

mongoose.connect('mongodb://127.0.0.1:27017/school')
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log(err))


const app =express()
app.use(express.json())
app.use(cors())
app.post('/Signup',(req,res)=>{
    const {name,email,password}=req.body; 
    studentModel.create({
        name,email,password
    })
    .then(user=>{res.json(user)
        console.log(user)
}).catch(err=>res.json(err))
    
})
app.listen(3000,()=>{
    console.log("Server is listening the port!")
})