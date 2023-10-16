import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

export const createUser = async (
	user: UserInterface
): Promise<UserInterface> => {
	const newUser = new UserModel(user)
	return await newUser.save()
}
