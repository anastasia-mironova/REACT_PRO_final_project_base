import { cartActions } from '5-entities/cart/model/cart';
import { useAppDispatch } from '1-app/store/utils';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};
