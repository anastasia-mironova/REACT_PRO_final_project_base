import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { useLocation } from 'react-router-dom';
import { ProductDetails } from '3-widgets/ProductDetails';

export const ProductPage = WithProtection(() => {
	const location = useLocation();
	const { pathname } = location;
	const productId = pathname.split('/').at(-1) || '';

	if (!productId) return null;

	return <ProductDetails productId={productId} />;
});
