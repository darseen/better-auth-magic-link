import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { magicLink } from "better-auth/plugins";
import { sendEmail } from "@/utils";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  user: {
    additionalFields: {
      referredBy: {
        type: "string",
        defaultValue: null,
        required: false,
        input: true,
      },
    },
  },

  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }, ctx) => {
        const referredBy = ctx?.query.referredBy as string | undefined;
        await sendEmail(email, url, referredBy);
      },
    }),
  ],

  databaseHooks: {
    user: {
      create: {
        before: async (user, ctx) => {
          const searchParams = new URLSearchParams(ctx!.request!.url);
          const referredBy = searchParams.get("referredBy");
          return { data: { ...user, referredBy } };
        },
      },
    },
  },
});
