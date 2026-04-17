import classNames from 'classnames';
import s from './ProductDelivery.module.css';
import truckSVG from '6-shared/assets/icons/truck.svg';
import qualitySVG from '6-shared/assets/icons/quality.svg';

export const ProductDelivery = () => (
	<>
		<div className={classNames(s['product__delivery'])}>
			<img src={truckSVG} alt='truck' />
			<div className={classNames(s['product__right'])}>
				<h3 className={classNames(s['product__name'])}>
					Доставка по всему Миру!
				</h3>
				<p className={classNames(s['product__text'])}>
					Доставка курьером — <span className='bold'> от 399 ₽</span>
				</p>
				<p className={classNames(s['product__text'])}>
					Доставка в пункт выдачи —
					<span className={classNames(s['product__bold'])}> от 199 ₽</span>
				</p>
			</div>
		</div>
		<div className={classNames(s['product__delivery'])}>
			<img src={qualitySVG} alt='quality' />
			<div className={classNames(s['product__right'])}>
				<h3 className={classNames(s['product__name'])}>Гарантия качества</h3>
				<p className={classNames(s['product__text'])}>
					Если Вам не понравилось качество нашей продукции, мы вернем деньги,
					либо сделаем все возможное, чтобы удовлетворить ваши нужды.
				</p>
			</div>
		</div>
	</>
);
