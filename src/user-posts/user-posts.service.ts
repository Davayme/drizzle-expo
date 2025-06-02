import { Injectable } from '@nestjs/common';
import { CreateUserPostDto } from './dto/create-user-post.dto';
import { userPosts } from '../../drizzle/schema';
import { eq, and } from 'drizzle-orm';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserPostsService {
  constructor(private dbService: DatabaseService) {}

  async create(dto: CreateUserPostDto) {
    return this.dbService.db.insert(userPosts).values(dto).returning();
  }

  async findAll() {
    return this.dbService.db.query.userPosts.findMany({
      with: {
        user: true,
        post: true,
      },
    });
  }

  async findOne(id: { userId: number; postId: number }) {
    return this.dbService.db.query.userPosts.findFirst({
      where: and(
        eq(userPosts.userId, id.userId),
        eq(userPosts.postId, id.postId),
      ),
      with: {
        user: true,
        post: true,
      },
    });
  }

  async update(
    id: { userId: number; postId: number },
    dto: Partial<CreateUserPostDto>,
  ) {
    // No hay campos editables, pero por convención se puede dejar
    return this.dbService.db
      .update(userPosts)
      .set(dto)
      .where(
        and(eq(userPosts.userId, id.userId), eq(userPosts.postId, id.postId)),
      )
      .returning();
  }

  async remove(id: { userId: number; postId: number }) {
    return this.dbService.db
      .delete(userPosts)
      .where(
        and(eq(userPosts.userId, id.userId), eq(userPosts.postId, id.postId)),
      )
      .returning();
  }
}
