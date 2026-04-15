import s from './CartPage.module.css';
import classNames from 'classnames';
import { useAppSelector } from '1-app/store/utils';
import { cartSelectors } from '5-entities/cart/model/cart';
import { CartList } from '../../../5-entities/cart/ui/CartList';
import { CartAmount } from '../../../4-features/cart/CartAmount';

export const CartPage = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} />
			</div>
		</div>
	);
};
