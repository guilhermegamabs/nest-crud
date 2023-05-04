import { IsNotEmpty } from 'class-validator';

export class EditUser {
  @IsNotEmpty({ message: 'You must put a name' })
  name: string;
  @IsNotEmpty({ message: 'You must put an age' })
  age: number;
}
