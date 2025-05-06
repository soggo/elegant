// src/context/CartContext.js
import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0, // Subtotal of items
  selectedShippingCost: 0, // New: To store selected shipping cost
  finalTotal: 0, // New: To store totalAmount + selectedShippingCost
  addItem: (item) => {},
  removeItem: (id) => {},
  updateQuantity: (id, newQuantity) => {},
  updateShippingCost: (cost) => {}, // New: Function to update shipping cost
});

export default CartContext;