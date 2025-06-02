import 'dotenv/config';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

const main = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await db.execute(sql`DROP SCHEMA public CASCADE; CREATE SCHEMA public;`);
};

void main();
