import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { WithQuery } from '6-shared/lib/HOCs/WithQuery';
import { useProducts } from '5-entities/product/model/useProducts';
import { ButtonBack } from '6-shared/ui/ButtonBack';
import { CardList } from '3-widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
});
