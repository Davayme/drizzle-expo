import { Module } from '@nestjs/common';
import { UsersPostService } from './users-post.service';
import { UsersPostController } from './users-post.controller';

@Module({
  controllers: [UsersPostController],
  providers: [UsersPostService],
})
export class UsersPostModule {}
