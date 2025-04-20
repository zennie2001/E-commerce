import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import connectCloudinary from './Config/cloudinary.js';
import userRouter from './APP/Routes/userRoutes.js';



let app = express();
let port =  process.env.PORT || 4000
connectCloudinary()

app.use(cors())
app.use(express.json())

//api endpoints
app.use('/api/user', userRouter)


app.get('/', (req, res)=>{
    res.send('API is working')
})

//connect to mongoDB

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB")
    app.listen(port, ()=>(
        console.log('Server started on PORT :' + port)
    ))
})
