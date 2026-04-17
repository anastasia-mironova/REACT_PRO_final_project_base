import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { ProductList } from '4-features/ProductList';

export const HomePage = WithProtection(() => {
	return <ProductList />;
});
