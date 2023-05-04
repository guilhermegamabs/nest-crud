import { IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty({ message: 'You must put a name' })
  id: number;
}
