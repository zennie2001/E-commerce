import React, { useContext, useState } from "react";
import axios from "axios";
import { generateUniqueId } from "esewajs";
import { ShopContext } from "../Context/ShopContext";

function EsewaPaymentForm() {
    const {backendUrl} = useContext(ShopContext)
    const [amount, setAmount] = useState("");

    const handlePayment = async (e) => {
      e.preventDefault();
     
    };

  return (

    <div>
      <h1>eSewa Payment Integration</h1>

      <div className="form-container" onSubmit={handlePayment}>
        <form className="styled-form">
          <div className="form-group">
            <label htmlFor="Amount">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder="Enter amount"
            />
          </div>

          <button type="submit" className="submit-button">
            Pay with eSewa
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default EsewaPaymentForm