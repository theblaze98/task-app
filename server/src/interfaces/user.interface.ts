export interface UserInterface {
  id: string
  username: string
  email: string
  password: string
  isVerified: boolean
  otp: string
  otpExpiry: Date
}
