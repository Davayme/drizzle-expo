import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersPostService } from './users-post.service';
import { CreateUsersPostDto } from './dto/create-users-post.dto';
import { UpdateUsersPostDto } from './dto/update-users-post.dto';

@Controller('users-post')
export class UsersPostController {
  constructor(private readonly usersPostService: UsersPostService) {}

  @Post()
  create(@Body() createUsersPostDto: CreateUsersPostDto) {
    return this.usersPostService.create(createUsersPostDto);
  }

  @Get()
  findAll() {
    return this.usersPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersPostDto: UpdateUsersPostDto) {
    return this.usersPostService.update(+id, updateUsersPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersPostService.remove(+id);
  }
}
