import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please provide a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required' }),
});
