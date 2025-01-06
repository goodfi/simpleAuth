import Credential from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import bcrypt from 'bcryptjs';
import { LoginSchema } from './schemas';
import { getUserByEmail } from './data/user';

export default {
  providers: [
    Credential({
      async authorize(credential) {
        const validatedFields = LoginSchema.safeParse(credential);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
