import { Module } from '@nestjs/common';
import { UserPostsService } from './user-posts.service';
import { UserPostsController } from './user-posts.controller';

@Module({
  controllers: [UserPostsController],
  providers: [UserPostsService],
})
export class UserPostsModule {}
