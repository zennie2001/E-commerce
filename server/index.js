let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')

let app = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser())

//connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/FullstackEcommerce').then(()=>{
    console.log("connected tp mongoDB")
    app.listen('4050')

})