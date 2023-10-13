import { z } from 'zod'

export const registerValidation = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})
