import jwt from 'jsonwebtoken'
import 'dotenv/config'

const authUser =  async( req , res , next)=>{
    const {token} = req.headers

    if(!token){
        return res.json({Success:false , message:"Not Authorized Login Again"} )
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }
}

export default authUser