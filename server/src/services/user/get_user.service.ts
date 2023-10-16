import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

export const getUser = async ({
	id,
	email,
}: {
	id?: string
	email?: string
}): Promise<UserInterface | null> => {
	const user = await UserModel.findOne({ $or: [{ id }, { email }] })
	return user
}
