import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @Type(() => Number)
  @IsInt()
  authorId: number;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
