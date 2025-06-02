import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @Type(() => Number)
  @IsInt()
  age: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
