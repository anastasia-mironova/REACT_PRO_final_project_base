import s from './LikeButton.module.css';
import { ReactComponent as LikeSvg } from '6-shared/assets/icons/like.svg';
import classNames from 'classnames';
import { userSelectors } from '5-entities/auth/user';
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	IErrorResponse,
} from '5-entities/product/model/productsApi';
import { toast } from 'react-toastify';
import {
	memo,
	useCallback,
	useState,
	useOptimistic,
	startTransition,
} from 'react';
import { useAppSelector } from '6-shared/store/utils';

type TLikeButtonProps = {
	product: Product;
};

export const LikeButton = memo(({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const [isLiked, setIsLiked] = useState(
		() => product?.likes?.some((l) => l.userId === user?.id) || false
	);

	const [optimisticLike, setOptimisticLike] = useOptimistic<boolean, boolean>(
		isLiked,
		(_, newState) => newState
	);

	const toggleLike = useCallback(() => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}

		startTransition(async () => {
			const newLikeState = !isLiked;

			setOptimisticLike(newLikeState);
			setIsLiked(newLikeState);

			try {
				let response;
				if (isLiked) {
					response = await deleteLike({ id: `${product.id}` });
				} else {
					response = await setLike({ id: `${product.id}` });
				}

				if (response.error) {
					const error = response.error as IErrorResponse;
					toast.error(error.data.message);
					setOptimisticLike(isLiked);
					setIsLiked(isLiked);
				}
			} catch (error) {
				setOptimisticLike(isLiked);
				setIsLiked(isLiked);
				toast.error('Произошла ошибка. Попробуйте позже.');
			}
		});
	}, [
		accessToken,
		isLiked,
		product.id,
		setLike,
		deleteLike,
		setOptimisticLike,
		setIsLiked,
	]);

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: optimisticLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
});
