import { configureStore } from "@reduxjs/toolkit";

import productReducer from './reducers/products'

export const store = configureStore({
    reducer: {
        productReducer
    },
})