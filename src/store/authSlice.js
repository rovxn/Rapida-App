import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('foodieUser'));
const storedAuth = JSON.parse(localStorage.getItem('foodieAuth'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: storedUser || null,
    isAuthenticated: storedAuth || false,
  },
  reducers: {
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem('foodieUsers')) || [];
      users.push(action.payload);
      localStorage.setItem('foodieUsers', JSON.stringify(users));
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('foodieUser', JSON.stringify(action.payload));
      localStorage.setItem('foodieAuth', true);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('foodieUser');
      localStorage.removeItem('foodieAuth');
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
