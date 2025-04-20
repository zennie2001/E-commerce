import userModel from "../Models/userModel.js";

//Routes for user login
const loginUser = async (req , res) =>{

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
        
    } catch (error) {
        
    }
    
}
//Routes for admin login

const adminLogin = async (req , res) =>{

}


export {loginUser, registerUser, adminLogin}
