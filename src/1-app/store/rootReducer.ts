import { combineReducers } from 'redux';
import { userSlice } from '5-entities/auth/user';
import { cartSlice } from '5-entities/cart/model/cart';
import { productsSlice } from '5-entities/product/products';
import { authApi } from '5-entities/auth/model/authApi';
import { productsApi } from '5-entities/product/model/productsApi';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
