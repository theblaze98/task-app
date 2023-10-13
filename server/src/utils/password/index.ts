import { hash, compare } from 'bcryptjs'

export const encryptPassword = async (password: string): Promise<string> => {
	return await hash(password, 10)
}

export const comparePassword = async (
	password: string,
	hashPassword: string
): Promise<boolean> => {
	return await compare(password, hashPassword)
}
