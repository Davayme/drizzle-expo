import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { UsersPostModule } from './users-post/users-post.module';

@Module({
  imports: [UsersModule, DatabaseModule, UsersPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
