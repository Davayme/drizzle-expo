import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UserPostsService } from './user-posts.service';
import { CreateUserPostDto } from './dto/create-user-post.dto';

@Controller('user-posts')
export class UserPostsController {
  constructor(private readonly userPostsService: UserPostsService) {}

  @Post()
  create(@Body() createUserPostDto: CreateUserPostDto) {
    return this.userPostsService.create(createUserPostDto);
  }

  @Get()
  findAll() {
    return this.userPostsService.findAll();
  }

  @Get('one')
  findOne(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('postId', ParseIntPipe) postId: number,
  ) {
    return this.userPostsService.findOne({ userId, postId });
  }

  @Delete()
  remove(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('postId', ParseIntPipe) postId: number,
  ) {
    return this.userPostsService.remove({ userId, postId });
  }
}
