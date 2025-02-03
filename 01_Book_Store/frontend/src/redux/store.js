import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cart/cartSlice.js';

export default configureStore({
	reducer: {
		cart: cartReducer,
	},
});
