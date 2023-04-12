import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  userProductsInCart: [],
  error: null,
};

export const getCart = createAsyncThunk("cart/getCart", async (user) => {
  const response = await axios.get(`http://localhost:3001/cart/${user}`);
  return response.data;
});

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ userId, productId, quantity }) => {
    const response = await axios.put(
      `http://localhost:3001/cart/${userId}/${productId}`,
      { quantity }
    );
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ UserId, ProductId }) => {
    const response = await axios.delete(
      `http://localhost:3001/cart/delete/${UserId}/${ProductId}`
    );
    return response.data;
  }
);

export const removeAllCartItems = createAsyncThunk(
  "cart/removeAllCartItems",
  async (user) => {
    const response = await axios.delete(`http://localhost:3001/cart/delete/${user}`);
    return response.data;
  }
);



export const getCartSlice = createSlice({
  name: "getCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.userProductsInCart = action.payload;
      state.error = "";
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.status = "failed", 
      state.userProductsInCart = [];
      state.error = action.error.message;
    });
    builder
      .addCase(updateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedItem = action.payload;
        const updatedCartItems = state.userProductsInCart.products.map((item) => {
          if (item.ProductId === updatedItem.ProductId) {
            return { ...item, quantity: updatedItem.quantity };
          } else {
            return item;
          }
        });
        state.userProductsInCart = { ...state.userProductsInCart, products: updatedCartItems };
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedItem = action.payload;
        const existingItemIndex = state.userProductsInCart.products.findIndex(
          (item) => item.ProductId === deletedItem.ProductId
        );
        if (existingItemIndex !== -1) {
          state.userProductsInCart.products.splice(existingItemIndex, 1);
        }
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(removeAllCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeAllCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userProductsInCart = [];
      })
      .addCase(removeAllCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
     
      
      
  },
});

export default getCartSlice.reducer;
