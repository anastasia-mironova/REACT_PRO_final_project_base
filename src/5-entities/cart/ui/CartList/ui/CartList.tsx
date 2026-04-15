import { CartItem } from '4-features/cart/CartItem';
import s from '2-pages/CartPage/ui/CartPage.module.css';
import classNames from 'classnames';

type CartListProps = {
	products: CartProduct[];
};
export const CartList = ({ products }: CartListProps) => {
	return (
		<div className={classNames(s['cart-list'])}>
			{products.map((p) => (
				<CartItem product={p} key={p.id} />
			))}
		</div>
	);
};
