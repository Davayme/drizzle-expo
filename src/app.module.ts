import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { UserPostsModule } from './user-posts/user-posts.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, DatabaseModule, UserPostsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
