import { ButtonBack } from '6-shared/ui/ButtonBack';
import { useLocation } from 'react-router-dom';
import { FavoriteList } from '3-widgets/FavoriteList';

export const FavoritesPage = () => {
	const { pathname } = useLocation();
	const isFavoritesPage = pathname === '/favorites';

	return (
		<>
			<ButtonBack />
			<FavoriteList isFavoritesPage={isFavoritesPage} />
		</>
	);
};
