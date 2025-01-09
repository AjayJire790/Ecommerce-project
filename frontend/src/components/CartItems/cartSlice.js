import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useAuth } from "../../context/AuthContext"; // This import is not necessary for this redux slice

const initialState = {
  cartItems: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

// Async thunk for adding an item to the cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartItem, { getState }) => {
    const token = getState().auth.token; // Fetch token from Redux state
    const response = await axios.post(
      "http://localhost:5000/app/carts",
      cartItem,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use token from Redux state (NOT localStorage)
        },
      }
    );
    return response.data;
  }
);

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { getState }) => {
    const token = getState().auth.token; // Fetch token from Redux state
    const response = await axios.get("http://localhost:5000/app/carts", {
      headers: {
        Authorization: `Bearer ${token}`, // Use token from Redux state (NOT localStorage)
      },
    });
    return response.data;
  }
);

// Async thunk for deleting an item from the cart
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (cartItemId, { getState }) => {
    const token = getState().auth.token; // Fetch token from Redux state
    await axios.delete(`http://localhost:5000/app/carts/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Use token from Redux state (NOT localStorage)
      },
    });
    return cartItemId;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export default cartSlice.reducer;
