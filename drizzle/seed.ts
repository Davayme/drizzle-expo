import { drizzle } from 'drizzle-orm/node-postgres';
import { post, user, userPosts } from './schema';
import { Logger } from '@nestjs/common';
import 'dotenv/config';

const db = drizzle(process.env.DATABASE_URL!);

async function seed() {
  const users: (typeof user.$inferInsert)[] = [
    { email: 'alice@example.com', name: 'Alice', age: 30, isActive: true },
    { email: 'bob@example.com', name: 'Bob', age: 25, isActive: true },
    { email: 'carol@example.com', name: 'Carol', age: 28, isActive: false },
  ];

  const posts: (typeof post.$inferInsert)[] = [
    { title: 'Hello World', content: 'This is a test post', authorId: 1 },
    { title: 'Hello World', content: 'This is a test post', authorId: 2 },
    { title: 'Hello World', content: 'This is a test post', authorId: 3 },
  ];

  const userPostsRe: (typeof userPosts.$inferInsert)[] = [
    { userId: 1, postId: 1 },
    { userId: 2, postId: 2 },
    { userId: 3, postId: 3 },
    { userId: 1, postId: 2 },
    { userId: 2, postId: 3 },
    { userId: 3, postId: 1 },
  ];

  await db.insert(user).values(users);
  await db.insert(post).values(posts);
  await db.insert(userPosts).values(userPostsRe);
}

seed()
  .then(() => {
    Logger.log('Seeding completed successfully');
    process.exit(0);
  })
  .catch((e) => {
    Logger.error(e);
    process.exit(1);
  });
