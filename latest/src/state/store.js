import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./authslice"
const store = configureStore({
  reducer: {
    counter: authSlice, },
});

export default store;
