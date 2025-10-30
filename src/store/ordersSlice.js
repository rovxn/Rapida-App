import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    all: JSON.parse(localStorage.getItem('foodieOrders')) || [],
  },
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        ...action.payload,
        date: new Date().toLocaleString(),
      };
      state.all.push(newOrder);
      localStorage.setItem('foodieOrders', JSON.stringify(state.all));
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
