import { JSX, useState } from 'react';
import { LogoutDialogOptions, LogoutDialogProps } from '../model/types';
import { LogoutDialog } from '..';

export interface UseConfirmDialogResult {
	confirm: (options?: LogoutDialogOptions) => Promise<boolean>;
	element: JSX.Element | null;
}

export const useLogoutDialog = (): UseConfirmDialogResult => {
	const [dialogProps, setDialogProps] = useState<
		(LogoutDialogProps & { resolve: (value: boolean) => void }) | null
	>(null);

	const confirm = (options: LogoutDialogOptions = {}): Promise<boolean> => {
		return new Promise((resolve) => {
			setDialogProps({
				title: options.title,
				message: options.message,
				onConfirm: () => resolve(true),
				onCancel: () => resolve(false),
				resolve,
			});
		});
	};

	const handleConfirm = () => {
		dialogProps?.onConfirm();
		setDialogProps(null);
	};

	const handleCancel = () => {
		dialogProps?.onCancel();
		setDialogProps(null);
	};

	const element = dialogProps ? (
		<LogoutDialog
			title={dialogProps.title}
			message={dialogProps.message}
			onConfirm={handleConfirm}
			onCancel={handleCancel}
		/>
	) : null;

	return { confirm, element };
};
