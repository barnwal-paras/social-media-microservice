import { IsString, IsOptional, MaxLength } from 'class-validator';

export class PostRequestDTO {
  @IsString()
  id!: String;
  @IsString()
  content!: String;
}