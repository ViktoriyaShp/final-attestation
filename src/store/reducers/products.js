import { createSlice } from "@reduxjs/toolkit";

// import { configureStore } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
        counter: 0,
        totalPrice: 0
},

reducers: {
    add: (state, actions) => {
        
        state.list.push(actions.payload);
        
        state.counter += 1;

        state.totalPrice += actions.payload.price;
    },
    remove: (state, actions) => {

        state.totalPrice -= state.list.find(({id}) => actions.payload.id !== id).price

        state.list = state.list.filter(({id}) => id !== actions.payload.id)
        
        state.counter -= 1;
        },
    },
})

export const { add, remove } = productSlice.actions

export default productSlice.reducer

