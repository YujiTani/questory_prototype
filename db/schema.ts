import { sql } from "drizzle-orm";
import { integer, pgEnum, pgTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

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

const userFeedbacks = pgTable('user_feedbacks', {
  id: serial('id').primaryKey(),
  details: text('details'),
  stage_id: integer('stage_id').notNull(),
  question_id: integer('question_id').notNull(),
  created_at: timestamp('created_at').default(sql`now()`),
});

const feedbackIssues = pgTable('feedback_issues', {
  id: serial('id').primaryKey(),
  feedback_id: integer('feedback_id').references(() => userFeedbacks.id),
  issue_type: varchar('issue_type', { length: 256 }).notNull(),
  created_at: timestamp('created_at').default(sql`now()`),
});

export { users, userFeedbacks, feedbackIssues };

