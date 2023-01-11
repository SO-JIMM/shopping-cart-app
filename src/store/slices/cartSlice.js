import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cart: null,
  totalPrice: null,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions

export default cartSlice.reducer
