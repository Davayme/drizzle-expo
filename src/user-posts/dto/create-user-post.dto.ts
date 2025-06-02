import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserPostDto {
  @Type(() => Number)
  @IsInt()
  userId: number;

  @Type(() => Number)
  @IsInt()
  postId: number;
}
