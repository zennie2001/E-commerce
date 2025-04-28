import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";
import { EsewaPaymentGateway,EsewaCheckStatus } from "esewajs";


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
    
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentmethods:'eSewa',
            payment:false,
            date: Date.now()
        }

        const  reqPayment=await EsewaPaymentGateway(
            amount,0,0,0,userId,process.env.MERCHANT_ID,process.env.ESEWA_SECRET_KEY,process.env.SUCCESS_URL,process.env.FAILURE_URL,process.env.ESEWAPAYMENT_URL,undefined,undefined)
      if(!reqPayment){
        return res.json({Success:false, message:"error sending data"})
      }
      if (reqPayment) {
        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({Success:true, 
            url: reqPayment.request.res.responseUrl,
            message:"Order Placed"})
      }

       
        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message})  
    }
}

//placing orders using Khalti methos
const placeOrderKhalti = async (req , res)=>{
    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentmethods:'Khalti',
            payment:true,
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
    try {
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({Success:true, message:"Status Updated"})
        
    } catch (error) {
        console.log(error)
        res.json({Success:false, message:error_message}) 
    }
}

export {placeOrder, placeOrderEsewa, placeOrderKhalti, allOrders, userOrders, updateStatus}