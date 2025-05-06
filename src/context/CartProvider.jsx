// src/context/CartProvider.js
import React, { useReducer } from 'react';
import CartContext from './CartContext';
import cartReducer, { initialState } from './CartReducer';

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

    const addItemtoCartHandler = (item) => {
        console.log("Adding item (placeholder):", item);
        dispatchCartAction({ type: 'ADD_ITEM', payload: item });
    };

    const removeItemFromCartHandler = (id) => {
        console.log('Removing item (placeholder):', id);
        dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
    };

    const updateQuantityHandler = (id, newQuantity) => {
        console.log(`Dispatching UPDATE_QUANTITY for id: ${id} to quantity: ${newQuantity}`);
        dispatchCartAction({
          type: 'UPDATE_QUANTITY',
          payload: { id: id, quantity: newQuantity }
        });
    };

    // New handler for updating shipping cost
    const updateShippingCostHandler = (cost) => {
        console.log('Updating shipping cost (placeholder):', cost);
        dispatchCartAction({ type: 'UPDATE_SHIPPING_COST', payload: cost });
    };

    // Calculate finalTotal based on cartState
    const finalTotalValue = cartState.totalAmount + cartState.selectedShippingCost;

    const CartContextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount, // Subtotal of items
        selectedShippingCost: cartState.selectedShippingCost, // Provide selected shipping cost
        finalTotal: finalTotalValue, // Provide the calculated final total
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
        updateQuantity: updateQuantityHandler,
        updateShippingCost: updateShippingCostHandler, // Provide the updater function
    };

    return (
        <CartContext.Provider value={CartContextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;