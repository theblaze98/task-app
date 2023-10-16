import { Schema, model } from 'mongoose'
import { UserInterface } from '@/interfaces'

const UserSchema = new Schema<UserInterface>(
	{
		id: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		otp: {
			type: String,
		},
		otpExpiry: {
			type: Date,
		},
	},
	{ timestamps: true }
)

export default model('user', UserSchema)
