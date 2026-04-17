import { useProducts } from '5-entities/product/model/useProducts';
import { memo, useEffect, useRef } from 'react';
import { WithQuery } from '6-shared/lib/HOCs/WithQuery';
import { LoadMore } from '4-features/LoadMore';
import { CardList } from '3-widgets/CardList';

export const ProductList = memo(() => {
	const { products, isLoading, isError, error } = useProducts();
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	});

	const CardListWithQuery = WithQuery(CardList);

	return (
		<>
			<h1>Render Count: {renderCount.current}</h1>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
});
