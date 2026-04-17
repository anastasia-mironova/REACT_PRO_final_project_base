import { isLiked } from '6-shared/lib/utils';
import { useAppSelector } from '6-shared/store/utils';
import { userSelectors } from '5-entities/auth/user';
import { useGetProductsQuery } from '5-entities/product/model/productsApi';
import { productsSelectors } from '5-entities/product/products';

interface UseFavoriteProductsProps {
	isFavoritesPage: boolean;
}

export const useFavoriteProducts = ({
	isFavoritesPage,
}: UseFavoriteProductsProps) => {
	const { searchText, page, perPage, sort } = useAppSelector(
		productsSelectors.getProductsState
	);

	const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
		searchText,
		sort,
		page,
		perPage: isFavoritesPage ? undefined : perPage,
	});

	let products = data?.products || [];
	const productsCount = data?.length || 0;

	if (isFavoritesPage) {
		const user = useAppSelector(userSelectors.getUser);
		products = products.filter((product) => isLiked(product.likes, user?.id));
	}

	return {
		products,
		isLoading,
		isError,
		isFetching,
		error,
		productsCount,
	};
};
