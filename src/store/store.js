import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import ordersReducer from './ordersSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: ordersReducer,
    wishlist: wishlistReducer,
  },
});
