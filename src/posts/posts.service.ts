import { Injectable } from '@nestjs/common';
import { post } from '../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
  constructor(private dbService: DatabaseService) {}

  async create(data: CreatePostDto) {
    return this.dbService.db.insert(post).values(data).returning();
  }

  async findAll() {
    return this.dbService.db.select().from(post);
  }

  async findOne(id: number) {
    return this.dbService.db.query.post.findFirst({
      where: eq(post.id, id),
      with: { author: true },
    });
  }

  async update(id: number, data: UpdatePostDto) {
    return this.dbService.db
      .update(post)
      .set(data)
      .where(eq(post.id, id))
      .returning();
  }

  async remove(id: number) {
    return this.dbService.db.delete(post).where(eq(post.id, id)).returning();
  }
}
