import { CardList } from '3-widgets/CardList';
import { WithQuery } from '6-shared/lib/HOCs/WithQuery';
import { useFavoriteProducts } from '../model/useFavoriteProducts';

interface FavoriteListProps {
	isFavoritesPage: boolean;
}

export const FavoriteList = ({ isFavoritesPage }: FavoriteListProps) => {
	const { isLoading, isError, products, error } = useFavoriteProducts({
		isFavoritesPage,
	});

	const CardListWithQuery = WithQuery(CardList);

	return (
		<CardListWithQuery
			title='Избранные'
			isLoading={isLoading}
			isError={isError}
			products={products}
			error={error}
		/>
	);
};
