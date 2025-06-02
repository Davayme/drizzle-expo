import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersPostDto } from './create-users-post.dto';

export class UpdateUsersPostDto extends PartialType(CreateUsersPostDto) {}
