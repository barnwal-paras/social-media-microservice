import { IsString, IsOptional, MaxLength, IS_ALPHA, IsUUID } from 'class-validator';



export interface Post {
  id: String
  content: String
  updated_at?: String
  created_at?: String
  average_word_length?: Number
  total_word_count?: Number
}