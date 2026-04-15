import { configureStore } from '@reduxjs/toolkit';
import AppApi from '5-entities/auth/ApiServise';
import { rootReducer } from '1-app/store/rootReducer';
import { authApi } from '5-entities/auth/model/authApi';
import { productsApi } from '5-entities/product/model/productsApi';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: AppApi,
			},
		}).concat([authApi.middleware, productsApi.middleware]),
});
