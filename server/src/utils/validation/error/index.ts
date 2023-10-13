import { ZodError } from 'zod'
import { BadRequestError, NotFoundError, UnauthorizedError } from '@/error'

export const errorValidation = (error: unknown) => {
	if (error instanceof BadRequestError)
		return { statusCode: error.statusCode, message: error.message }
	if (error instanceof NotFoundError)
		return { statusCode: error.statusCode, message: error.message }
	if (error instanceof UnauthorizedError)
		return { statusCode: error.statusCode, message: error.message }
	if (error instanceof ZodError)
		return {
			statusCode: 400,
			message: error.issues[0].message,
		}
	return { statusCode: 500, message: 'Internal Server Error', error }
}
