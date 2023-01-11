import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./slices/appSlice"
import { apiSlice } from "./api/apiSlice"
export const store = configureStore({
  reducer: {
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
