
import './index.css'

import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="cart-container">
      <div className="total-section">
        <span className="total-label">TOTAL:   ₹2000</span>
        
        <button className="checkout-button">CHECKOUT</button>
      </div>
      <h3 className="item-title">QUESTION TITLE</h3>
      <div className="item-section">
        
        <div className="item-details">
          <span className="item-label">MODULE: NAME OF MODULE</span>
          <span className="item-label">DATE: 18/04/2021</span>
    
        </div>
        <div className="item-actions">
          <select className="quantity-select" value={quantity} onChange={handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* Add more options as needed */}
          </select>
          <button className="delete-button">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;