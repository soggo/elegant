import { act } from "react";

export const initialState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    console.log("Reducer running with action:", action); 
    switch(action.type){
        case "ADD_ITEM":{
            const newItem = action.payload;
            console.log("Reducer ADD_ITEM payload:", newItem);
            
            const updatedTotalAmount = state.totalAmount + newItem.price * newItem.quantity;
            
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === newItem.id
              );

              const existingCartItem = state.items[existingCartItemIndex];

              let updatedItems;

              if (existingCartItem) {
             
                const updatedItem = {
                  ...existingCartItem,
                  quantity: existingCartItem.quantity + newItem.quantity,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem; 
                console.log("Reducer updating existing item:", updatedItem);
              } else {
               
                updatedItems = state.items.concat(newItem); 
                console.log("Reducer adding new item:", newItem);
              }

              return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
              };
        }

        case 'REMOVE_ITEM':{
            const idToRemove = action.payload;
            console.log("Reducer REMOVE_ITEM id:", idToRemove);

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === idToRemove
            )
            const existingItem = state.items[existingCartItemIndex];
            if (!existingItem) {
                return state;
            }
            const updatedTotalAmount = state.totalAmount - existingItem.price * existingItem.quantity;
            const updatedItems = state.items.filter(item => item.id !== idToRemove);
            console.log("Reducer removing item, new items array:", updatedItems);
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        }

        case 'UPDATE_QUANTITY':{
            const { id, quantity: newQuantity } = action.payload;
            if (newQuantity < 1) {
                console.log("Reducer UPDATE_QUANTITY ignored: quantity less than 1");
                return state;
              }
              const existingCartItemIndex = state.items.findIndex(item => item.id === id);
              const existingItem = state.items[existingCartItemIndex];

              if (!existingItem) {
                console.log("Reducer UPDATE_QUANTITY ignored: item not found");
                return state;
              }

              const updatedItem = {
                ...existingItem,
                quantity: newQuantity 
              };

              const updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedItem;

              const updatedTotalAmount = updatedItems.reduce((currentTotal, item) => {
                return currentTotal + item.price * item.quantity;
              }, 0); 

              return {
                ...state, 
                items: updatedItems,
                totalAmount: updatedTotalAmount,
              };

        }


        default:
            return state;
    }
}

export default cartReducer;