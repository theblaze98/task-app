import { sign, verify } from 'jsonwebtoken'

export const generateToken = (payload: any) => {
	return sign(payload, process.env.JWT_SECRET as string, {
		expiresIn: '1d',
	})
}

export const verifyToken = (token: string) => {
	return verify(token, process.env.JWT_SECRET as string)
}
