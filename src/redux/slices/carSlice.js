import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],      
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const isItemInCart = state.cartItems.find(
                cartItem => cartItem === newItem.id
            );
            if (isItemInCart) {
                state.cartItems=state.cartItems.map(item=>item.id===newItem.id ? newItem :item)
            } else { state.cartItems = [...state.cartItems, newItem] }
            const saveSate = JSON.stringify(...state.cartItems);
            sessionStorage.setItem("ItemCart",saveSate)
        },
        removeItemFromCart(state, action) {
            state.cartItems=state.cartItems.filter((item)=>item.id !==action.payload)
        }
    }
})
 const  cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export{cartActions,cartReducer}
