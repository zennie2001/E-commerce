
import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import Collection from "./Pages/Collection"
import Login from "./Pages/Login"
import Orders from "./Pages/Orders"
import PlaceOrder from "./Pages/PlaceOrder"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SearchBar from "./Components/SearchBar"
import { ToastContainer } from 'react-toastify';
import EsewaPaymentForm from "./Pages/EsewaPaymentForm"
import SuccessEsewa from "./Pages/SuccessEsewa"
import FailureEsewa from "./Pages/FailureEsewa"

function App() {


  return (
   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/place-order' element={<PlaceOrder/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/esewa' element={<EsewaPaymentForm/>} />
      <Route path="/payment-success" element={<SuccessEsewa />} />
      <Route path="/payment-failure" element={<FailureEsewa />} />
      
    </Routes>
    <Footer/>

   </div>
  )
}

export default App
