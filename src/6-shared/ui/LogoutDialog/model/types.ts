export interface LogoutDialogOptions {
	title?: string;
	message?: string;
}

export interface LogoutDialogProps extends LogoutDialogOptions {
	onConfirm: () => void;
	onCancel: () => void;
}
