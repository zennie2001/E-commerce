import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";


//placing orders using COD methos
const placeOrder = async (req , res)=>{
    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentmethods:'COD',
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({Success:true, message:"Order Placed"})
        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }

}

//placing orders using esewa methos
const placeOrderEsewa = async (req , res)=>{
    
}

//placing orders using Khalti methos
const placeOrderKhalti = async (req , res)=>{
    
}

//All order Data for Admin Panel
const allOrders = async (req , res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({Success:true, orders})
        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }
}

//User Order Data for frontend
const userOrders = async (req , res)=>{
    try {

        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({Success:true, orders})
        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})
    }
}

//update order status from Admin Panel
const updateStatus = async (req , res)=>{
    
}

export {placeOrder, placeOrderEsewa, placeOrderKhalti, allOrders, userOrders, updateStatus}