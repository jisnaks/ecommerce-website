import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  cartItems: [],
  isLoading: true,
  quantity: 0,
};

const url = "https://fakestoreapiserver.reactbd.com/products";
export const getProducts = createAsyncThunk('product/getProducts', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log("error"));
})

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload._id)

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity++;
      }
    },
    decrementQantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload._id)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },



  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.products = action.payload;

      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
}
)
export const { addToCart, deleteFromCart, incrementQuantity, decrementQantity } = CartSlice.actions;
export default CartSlice.reducer;