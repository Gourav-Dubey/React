import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./authslice"
const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ Correct key
  },
});

export default store;
