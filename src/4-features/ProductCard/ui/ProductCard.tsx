import classNames from 'classnames';
import s from './ProductCard.module.css';
import { Rating } from '6-shared/ui/Rating';
import { CartCounter } from '4-features/CartCounter';
import { ProductCartCounter } from '4-features/ProductCard/ui/ProductCartCounter';
import { LikeButton } from '4-features/LikeButton';
import { ProductDelivery } from '4-features/ProductDelivery';
import { ProductSpecifications } from '4-features/ProductSpecifications';

interface IProps {
	product: Product;
	isProductInCart: boolean;
}

export const ProductCard = ({ product, isProductInCart }: IProps) => {
	const { name, images, description, price, discount, id } = product;

	return (
		<div className={s.wrap}>
			<h1 className={classNames(s['header-title'])}>{name}</h1>
			<p className='acticul'>
				Артикул: <b>2388907</b>
			</p>
			<Rating rating={3} />
			<div className={classNames(s['product'])}>
				<div className={classNames(s['product__img-wrapper'])}>
					<img src={images} alt={description} />
				</div>
				<div className={classNames(s['product__desc'])}>
					<div className={classNames(s['price-big'], s['price-wrap'])}>
						<span className={classNames(s['price_old'], s['price_left'])}>
							{`${price} ₽`}
						</span>
						<span className={classNames(s['price_discount'], s['price'])}>
							{`${price - discount} ₽`}
						</span>
					</div>

					{isProductInCart ? (
						<CartCounter productId={id} />
					) : (
						<ProductCartCounter product={product} />
					)}

					<LikeButton product={product} />
					<ProductDelivery />
				</div>
			</div>
			<ProductSpecifications />
		</div>
	);
};
