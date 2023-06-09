import { IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty({ message: 'You must put a name' })
  name: string;
  @IsNotEmpty({ message: 'You must put an email' })
  email: string;
  @IsNotEmpty({ message: 'You must put an age' })
  age: number;
}
