import { configureStore } from "@reduxjs/toolkit";
import supermarketSalesReducer from "./supermarketSales/supermarketSalesSlice";


const store = configureStore({
    reducer: {
        supermarket: supermarketSalesReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch