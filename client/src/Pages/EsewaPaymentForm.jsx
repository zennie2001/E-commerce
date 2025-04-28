import React, { useContext, useState } from "react";
import axios from "axios";
import { generateUniqueId } from "esewajs";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router-dom";
import { useRef } from 'react';


function EsewaPaymentForm() {
    const formRef = useRef(null);
    const { backendUrl, token, cartItems, setCartItems,  getCartAmount, delivery_fee,  products } = useContext(ShopContext)
    const location = useLocation();
    const {orderData} = location.state || {}
    //const [amount, setAmount] = useState("");

    const handlePayment = async (e) => {
        e.preventDefault();
        const responseEsewa = await axios.post(backendUrl + '/api/order/eswea', orderData, {headers:{token}})
        console.log(responseEsewa.data);
        
        if (responseEsewa.data){
        
        setCartItems({})
        
        }else{
        console.log(response.data.message)
        //toast.error(response.data.message)
        }
        
        };
        
        let amount= getCartAmount() + delivery_fee;
        
        return (
        
        <div className="flex flex-col items-center ">
        <h1 className="text-2xl mt-20">eSewa Payment Integration</h1>
        
        <div className="form-container mt-16 " >
        <form className="styled-form" ref={formRef}
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST" >
        <div className="flex gap-2">
        <label htmlFor="Amount">Amount:</label>
        <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        placeholder="Enter amount"
        className="border border-gray-400 px-2"
        />
        
        </div>
        
        <button type="submit" onSubmit={handlePayment} className='bg-black text-white font-light px-8 py-2 mt-6 ml-16'>
        Pay with eSewa
        </button>
        </form>
        </div>
        </div>
        
        )
        }

    

export default EsewaPaymentForm