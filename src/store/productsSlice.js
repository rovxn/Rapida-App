import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: products,
    filtered: products,
  },
  reducers: {
    searchProduct: (state, action) => {
      state.filtered = state.all.filter(p =>
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action) => {
      if (action.payload === 'All') state.filtered = state.all;
      else state.filtered = state.all.filter(p => p.category === action.payload);
    },
    addProduct: (state, action) => {
      state.all.push(action.payload);
      state.filtered = state.all;
    },
    deleteProduct: (state, action) => {
      state.all = state.all.filter(p => p.id !== action.payload);
      state.filtered = state.all;
    },
  },
});

export const { searchProduct, filterByCategory, addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
