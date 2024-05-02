import "dotenv/config"
import type { Config } from 'drizzle-kit'

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  breakpoints: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} as const satisfies Config

