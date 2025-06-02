import { Injectable } from '@nestjs/common';
import { user } from '../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private dbService: DatabaseService) {}

  async create(data: CreateUserDto) {
    return this.dbService.db.insert(user).values(data).returning();
  }

  async findAll() {
    return this.dbService.db.select().from(user);
  }

  async findOne(id: number) {
    return this.dbService.db.query.user.findFirst({
      where: eq(user.id, id),
      with: { posts: true },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.dbService.db
      .update(user)
      .set(data)
      .where(eq(user.id, id))
      .returning();
  }

  async remove(id: number) {
    return this.dbService.db.delete(user).where(eq(user.id, id)).returning();
  }
}
