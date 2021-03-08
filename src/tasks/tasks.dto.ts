import { IsNotEmpty } from 'class-validator';
export class TaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
