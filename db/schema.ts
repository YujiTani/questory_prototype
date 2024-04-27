import { sql } from "drizzle-orm";
import { integer, pgEnum, pgTable, serial, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const popularityEnum = pgEnum('popularity', ['unknown', 'known', 'popular']);

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  age: integer('age'),
  createdAt:  timestamp('created_at').default(sql`now()`),
}, (users) => {
  return {
    nameIndex: uniqueIndex('name_idx').on(users.name),
  }
});

export default users;

