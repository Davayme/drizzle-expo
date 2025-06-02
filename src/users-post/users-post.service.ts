import { Injectable } from '@nestjs/common';
import { CreateUsersPostDto } from './dto/create-users-post.dto';
import { UpdateUsersPostDto } from './dto/update-users-post.dto';

@Injectable()
export class UsersPostService {
  create(createUsersPostDto: CreateUsersPostDto) {
    return 'This action adds a new usersPost';
  }

  findAll() {
    return `This action returns all usersPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersPost`;
  }

  update(id: number, updateUsersPostDto: UpdateUsersPostDto) {
    return `This action updates a #${id} usersPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersPost`;
  }
}
