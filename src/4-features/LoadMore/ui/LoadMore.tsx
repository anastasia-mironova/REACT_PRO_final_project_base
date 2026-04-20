import { Alert, CircularProgress, Stack } from '@mui/material';
import { memo, useRef } from 'react';
import { useLoadMore } from '../model/useLoadMore';

export const LoadMore = memo(() => {
	const ref = useRef<HTMLDivElement>(null!); // Add non-null assertion
	const { isEndOfList, isFetching } = useLoadMore({ ref });

	return (
		<Stack
			ref={ref}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				my: 5,
			}}>
			{isFetching && <CircularProgress />}
			{isEndOfList && <Alert severity='success'>End of list!</Alert>}
		</Stack>
	);
});
