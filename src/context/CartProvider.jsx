import React, { useReducer } from 'react';
import CartContext from './CartContext';
import cartReducer, { initialState } from './CartReducer';

const CartProvider = (props) => {
  

    const [cartState, dispatchCartAction]= useReducer(cartReducer,initialState)
    const addItemtoCartHandler = (item) =>{
        console.log("Adding item (placeholder):",item);
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
      

      const CartContextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
        updateQuantity: updateQuantityHandler 
    };
    
    return(
        <CartContext.Provider value={CartContextValue}>
        {props.children}
      </CartContext.Provider>
  
    )
    
}

export default CartProvider;