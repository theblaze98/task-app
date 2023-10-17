import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

type UpdateUserData = {
	username?: string
	email?: string
	password?: string
	isVerified?: boolean
	otp?: string
	otpExpiry?: Date
}

export const updateUser = async (
	id: string,
	user: UpdateUserData
): Promise<UserInterface | null> => {
	return await UserModel.findOneAndUpdate({ id }, { user })
}
