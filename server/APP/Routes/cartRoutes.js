import express from 'express'
import { addToCart, updateCart, getUserCart } from '../Controllers/cartController.js'
import authUser from '../Middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authUser, getUserCart)
cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser, updateCart)

export default cartRouter