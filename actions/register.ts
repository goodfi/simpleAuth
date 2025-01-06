'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { getUserByEmail, getUserByUserName } from '@/data/user';

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.data) {
    return { error: 'Invalid Fields!' };
  }

  const { username, name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUserName = await getUserByUserName(username);
  if (existingUserName) {
    return { error: 'UserName already in use!' };
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  //Todo:Send verification token email

  return { success: 'Create Account' };
};
