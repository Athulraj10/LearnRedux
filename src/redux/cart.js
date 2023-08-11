const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}

const cartSlice=createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
        increment:(state)=>{state.cartCount=+1},
        decrement:(state)=>{state.cartCount=-1},
        addToCart:(state)=>{state.cartCount=1},
    }
})
export const {increment,decrement,addToCart}=cartSlice.actions;
export default cartSlice.reducer;  
// this cartSLice we are importing to store.js