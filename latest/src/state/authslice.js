import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../helper/axiosInstance';
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
     const response = await axiosInstance.post('/auth/login', userData,{
      withCredentials:true
     });
     return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "failed to login");
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
