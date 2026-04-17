import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { ButtonBack } from '6-shared/ui/ButtonBack';
import { EditProfileForm } from '4-features/EditProfileForm';

export const ProfilePage = WithProtection(() => {
	return (
		<>
			<ButtonBack />
			<EditProfileForm />
		</>
	);
});
