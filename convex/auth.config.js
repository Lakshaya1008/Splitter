import { authConfig } from 'convex/server';
import { clerkAuth } from 'convex/auth/clerk';

export default authConfig({
  auth: clerkAuth({
    // Clerk JWT domain already in env
    // Convex auto-imports `CLERK_JWT_ISSUER_DOMAIN`
  }),
});
