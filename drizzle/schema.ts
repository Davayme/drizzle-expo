import { relations } from 'drizzle-orm';
import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  name: varchar('name').notNull(),
  age: integer('age').notNull(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  posts: many(post),
  userPosts: many(userPosts),
}));

export const post = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  content: varchar('content').notNull(),
  authorId: integer('author_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  isPublished: boolean('is_published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const postRelations = relations(post, ({ one, many }) => ({
  author: one(user, {
    fields: [post.authorId],
    references: [user.id],
  }),
  userPosts: many(userPosts),
}));

export const userPosts = pgTable(
  'user_posts',
  {
    userId: integer('user_id')
      .notNull()
      .references(() => user.id),
    postId: integer('post_id')
      .notNull()
      .references(() => post.id),
  },
  (table) => [
    index('user_id_index').on(table.userId),
    index('post_id_index').on(table.postId),
  ],
);

export const userPostRelations = relations(userPosts, ({ one }) => ({
  user: one(user, {
    fields: [userPosts.userId],
    references: [user.id],
  }),
  post: one(post, {
    fields: [userPosts.postId],
    references: [post.id],
  }),
}));
