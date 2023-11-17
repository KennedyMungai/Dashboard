import {
    createSlice,
    PayloadAction,
    createAsyncThunk
} from "@reduxjs/toolkit"
import axios from "axios"

const initialState: ISupermarketSales = {
    data: {
        total_sales_per_branch: { labels: [], data: [], label: '' },
        sales_by_gender: { labels: [], data: [], label: '' },
        gross_income_data: { labels: [], data: [], label: '' },
        product_line_by_total_sales: { labels: [], data: [], label: '' },
        product_line_by_gross_income: { labels: [], data: [], label: '' },
        product_line_by_rating: { labels: [], data: [], label: '' },
        payment_methods: { labels: [], data: [], label: '' },
        product_line_by_quantity: { labels: [], data: [], label: '' },
        shopping_hour_data: { labels: [], label: '', A: { label: '', data: [] }, B: { label: '', data: [] }, C: { label: '', data: [] } }
    }
}

export const getSupermarketSales = createAsyncThunk("root/supermarketSales", async () => {
    const response = await axios("http://localhost:8000/")
    const data = response.data
    return data
})