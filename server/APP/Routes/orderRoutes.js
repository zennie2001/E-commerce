import express from 'express'
import { placeOrder, placeOrderEsewa, placeOrderKhalti, allOrders, userOrders, updateStatus } from '../Controllers/orderController.js'
import adminAuth from '../Middleware/adminAuth.js'
import authUser from '../Middleware/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/eswea',authUser,placeOrderEsewa)
orderRouter.post('/khalti',authUser,placeOrderKhalti)

//User Features
orderRouter.post('/userorders',authUser, userOrders)

export default orderRouter;