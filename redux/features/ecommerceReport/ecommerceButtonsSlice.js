import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  revenue: false,
  purchases: false,
  orderValue: false,
}

export const ecommerceButton = createSlice({
  name: 'e_buttons',
  initialState,
  reducers: {
    revenueState: (state, action) => {
      state.purchases = false
      state.orderValue = false
      state.revenue = true
    },
    purchasesState: (state, action) => {
      state.orderValue = false
      state.revenue = false
      state.purchases = true
    },
    averageOrderState: (state, action) => {
      state.revenue = false
      state.purchases = false
      state.orderValue = true
    }
}})

export const { revenueState, purchasesState, averageOrderState } = ecommerceButton.actions;

export default ecommerceButton.reducer;
