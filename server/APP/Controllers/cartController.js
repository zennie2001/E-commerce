import userModel from "../Models/userModel.js"


//add products to user cart
const addToCart = async (req , res)=>{
    try {
        const {userId, itemId, size} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        if(cartData[itemId]){
           if(cartData[itemId][size]){
            cartData[itemId][size] += 1
           } 
           else{
            cartData[itemId][size] = 1
           }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({Success:true, message:"Added to cart" })
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }
}

//update user cart
const updateCart = async (req , res)=>{
    try {
        const {userId, itemId, size, quantity} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({Success:true, message:"Cart Updated" })

        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }
}

//get user cart
const getUserCart = async (req , res)=>{
   try {
    const {userId} = req.body

    const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        res.json({Success:true, cartData})
    
   } catch (error) {
    console.log(error)
    res.json({Success:false, message:error_message})
   }

}

export {addToCart, updateCart, getUserCart}