import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

export const updateUser = async (user: {
	id: string
	username?: string
	email?: string
	password?: string
	isVerified?: boolean
	otp?: string
	otpExpiry?: Date
}): Promise<UserInterface | null> => {
	const updatedUser = await UserModel.findOneAndUpdate(
		{ id: user.id },
		{
			username: user.username,
			email: user.email,
			password: user.password,
			isVerified: user.isVerified,
			otp: user.otp,
			otpExpiry: user.otpExpiry,
		}
	)
	return updatedUser
}
