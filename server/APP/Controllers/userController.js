import userModel from "../Models/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import 'dotenv/config'



const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//Routes for user login
const loginUser = async (req , res) =>{

    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:"Email doesn't exist"}) 
        }

        //
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({Success:true, token})
        }else{
            res.json({success:false, message:"Invalid Credentials"})   
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

//Routes for user register
const registerUser = async (req , res) =>{
    try {

        const {name, email, password} = req.body;

        //checking user already exists or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"user already exists"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter valid email"}) 
        }

        if(password.length < 8){
            return res.json({success:false, message:"Please enter strong Password of minimun 8 characters"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({Success:true, token})


        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message}) 
    }
    
}
//Routes for admin login

const adminLogin = async (req , res) =>{

}


export {loginUser, registerUser, adminLogin}
