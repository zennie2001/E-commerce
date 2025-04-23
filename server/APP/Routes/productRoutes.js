import express from 'express'
import { listProduct, addProduct, removeProduct, singleProduct } from "../Controllers/productController";

const productRouter = express.Router();

productRouter.post('/add',addProduct)
productRouter.post('/remove',removeProduct)
productRouter.post('/single',singleProduct)
productRouter.get('/list',listProduct)

export default productRouter